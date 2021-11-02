import { useCallback, useRef, useState } from "react"
import useCallbackOnce from "../useCallbackOnce"

const DefaultCapacity = 10;
type HistoryOptions = {
    /** Default: 10 */
    capacity: number
}

/**
 * useState but you can go back to the previous values
 * @param defaultValue Default state value
 * @param options History options
 */
export default function useStateWithHistory<T>(defaultValue: T, { capacity = DefaultCapacity }: HistoryOptions) {
    const [value, setValue] = useState(defaultValue)
    const historyRef = useRef([value])
    const pointerRef = useRef(0)

    const set = useCallback(v => {
        const resolvedValue = typeof v === "function" ? v(value) : v;

        if (historyRef.current[pointerRef.current] !== resolvedValue) {
            if (pointerRef.current < historyRef.current.length - 1) {
                historyRef.current.splice(pointerRef.current + 1);
            }

            historyRef.current.push(resolvedValue);

            while (historyRef.current.length > capacity) {
                historyRef.current.shift();
            }

            pointerRef.current = historyRef.current.length - 1;
        }

        setValue(resolvedValue);
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