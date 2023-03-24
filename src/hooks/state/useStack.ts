import { useMemo, useState } from "react";
import { HistoryOptions } from "./useStateWithHistory";

export type PushState<State> = (state: State) => number;
export type ToVoid = () => void;
export type UseStateStackReturn<State> = {
  value?: State,
  push: PushState<State>,
  pop: ToVoid,
  clear: ToVoid,
  size: number;
};
export type StackOptions = HistoryOptions;

/**
 * Simple stack object
 * @param initialValue Initial stack value
 * @param options Options which atm is only capacity
 * @returns Stack properties
 */
export function useStack<State>(initialValue?: State, options?: StackOptions): UseStateStackReturn<State> {
  const capacity = options?.capacity ?? 10;
  const [array, setArray] = useState(initialValue ? [initialValue] : []);
  const size = useMemo(() => array.length, [array]);
  const value = useMemo(() => array[array.length - 1], [size]);

  const push = (item: State) => {
    if (!item) return -1;
    else if (array.includes(item)) console.warn('Pushed item to stack, that was already in stack', {
      stack: array, item, foundAt: array.indexOf(item)
    });

    let currentSize = size;
    while (currentSize + 1 > capacity) {
      array.shift();
      currentSize--;
    }

    setArray(a => [...a, item]);
    return size;
  };
  const pop = () => setArray(a => a.slice(0, -1));
  const clear = () => setArray([]);

  return { value, push, pop, clear, size };
}
export default useStack;