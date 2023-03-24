import { useCallback, useMemo, useRef } from "react";
import useCallbackOnce from "../once/useCallbackOnce";
import useArrayState, { UseArrayReturn } from "./useArrayState";

const DefaultCapacity = 10;
export type HistoryOptions = {
  /** @default 10 */
  capacity: number;
};

type UseStateWithHistoryReturn<State> = [value: State, push: (value: State) => void, props: {
  history: UseArrayReturn<State>,
  /**
   * Internal pointer reference. Recommended not to use.
   */
  pointer: number,
  /**
   * Set value of the pointer reference. Preferred to use forward/go/backward instead.
   * @param value Number between 0 and capacity - 1.
   */
  setPointer(value: number): number,
  /**
   * Move pointer forward. Kinda like CTRL + Y
   */
  forward(): void,
  /**
   * Go to specific history index.
   */
  go(index: number): void,
  /**
   * Move pointer backward. Kinda like CTRL + Z
   */
  back(): void,
  /**
   * Remove provided history item or item at index.
   */
  remove(item: State | number): void,
  /**
   * Remove latest history item.
   */
  pop(): void;
}];

/**
 * useState but you can go back to the previous values
 * @param defaultValue Default state value
 * @param options History options
 */
export function useStateWithHistory<State>(defaultValue: State, { capacity = DefaultCapacity }: HistoryOptions): UseStateWithHistoryReturn<State> {
  const history = useArrayState<State>(defaultValue ? [defaultValue] : []);
  const pointerRef = useRef(0);
  const current = useMemo(() => history.index(pointerRef.current), [history, pointerRef.current]);

  const push = useCallback((value: State) => {
    const next = typeof value === "function" ? value(current) : value;
    history.push(next);

    while (history.length > capacity) {
      history.shift();
    }

    pointerRef.current = history.length - 1;
  }, [capacity, current]);

  const back = useCallbackOnce((by: number = 1) => {
    const value = pointerRef.current - by;
    if (value < 0) return;

    pointerRef.current = value;
  });

  const forward = useCallbackOnce((by: number = 1) => {
    const value = pointerRef.current + by;
    if (value >= history.length) return;

    pointerRef.current = value;
  });

  const go = useCallbackOnce<(index: number) => void>(index => {
    if (index < 0 || index > history.length - 1) return;
    pointerRef.current = index;
  });

  const remove = useCallbackOnce((item: State | number) => {
    let index = typeof item === 'number' ? item : history.indexOf(item);
    if (index == -1) index = history.length - 1;

    if (index < 0) return;
    history.filter((_, i) => i !== index);

    // Element removed was in history
    if (pointerRef.current > index) pointerRef.current--;
    // Element removed is self
    else if (pointerRef.current == index) {
      pointerRef.current = history.index(pointerRef.current + 1) ?
        pointerRef.current++ :
        pointerRef.current > 0 ?
          pointerRef.current-- :
          pointerRef.current;
    }
  });

  const pop = useCallbackOnce(() => {
    const isPointedTo = history.length - 1 === pointerRef.current;
    history.pop();

    if (isPointedTo) pointerRef.current--;
  });

  if (history.some(s => s === null || s === undefined)) {
    history.filter(s => s != null);
  }

  return [current, push, {
    history,
    get pointer() {
      return pointerRef.current;
    },
    setPointer(value: number) {
      return pointerRef.current = value;
    },
    back, forward, go, remove, pop
  }];
}

export default useStateWithHistory;

[].slice;