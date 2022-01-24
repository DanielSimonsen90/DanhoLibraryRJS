import { useCallback, useRef, useState } from "react"
import useCallbackOnce from "../useCallbackOnce"

const DefaultCapacity = 10;
export type HistoryOptions = {
    /** Default: 10 */
    capacity: number
}

type UseStateWithHistoryReturn<T> = [value: T, set: (value: T) => void, props: {
    history: T[],
    pointer: number,
    back(): void, 
    forward(): void, 
    go(index: number): void
}]

/**
 * useState but you can go back to the previous values
 * @param defaultValue Default state value
 * @param options History options
 */
export function useStateWithHistory<T>(defaultValue: T, { capacity = DefaultCapacity }: HistoryOptions): UseStateWithHistoryReturn<T> {
    const [value, setValue] = useState(defaultValue)
    const historyRef = useRef([value])
    const pointerRef = useRef(0)

    const set = useCallback((value: T) => {
        const _value = typeof value === "function" ? value(value) : value;

        if (historyRef.current[pointerRef.current] !== _value) {
            if (pointerRef.current < historyRef.current.length - 1) {
                historyRef.current.splice(pointerRef.current + 1);
            }

            historyRef.current.push(_value);

            while (historyRef.current.length > capacity) {
                historyRef.current.shift();
            }

            pointerRef.current = historyRef.current.length - 1;
        }

        setValue(_value);
    }, [capacity, value]);

    const back = useCallbackOnce(() => {
        if (pointerRef.current <= 0) return;
        pointerRef.current--;
        setValue(historyRef.current[pointerRef.current]);
    });

    const forward = useCallbackOnce(() => {
        if (pointerRef.current >= historyRef.current.length - 1) return;
        pointerRef.current++;
        setValue(historyRef.current[pointerRef.current]);
    });

    const go = useCallbackOnce<(index: number) => void>(index => {
        if (index < 0 || index > historyRef.current.length - 1) return;
        pointerRef.current = index;
        setValue(historyRef.current[pointerRef.current]);
    });

    return [value, set, { 
        history: historyRef.current, 
        pointer: pointerRef.current, 
        back, forward, go 
    }]
}

export default useStateWithHistory;