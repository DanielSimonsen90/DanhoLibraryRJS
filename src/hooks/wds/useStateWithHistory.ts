import { useCallback, useRef, useState } from "react"
import useCallbackOnce from "../useCallbackOnce"

const DefaultCapacity = 10;
export type HistoryOptions = {
    /** Default: 10 */
    capacity: number
}

type UseStateWithHistoryReturn<State> = [value: State, set: (value: State) => void, props: {
    history: State[],
    pointer: number,
    back(): void, 
    forward(): void, 
    go(index: number): void,
    remove(item: State | number): void,
    pop(): void;
}]

/**
 * useState but you can go back to the previous values
 * @param defaultValue Default state value
 * @param options History options
 */
export function useStateWithHistory<State>(defaultValue: State, { capacity = DefaultCapacity }: HistoryOptions): UseStateWithHistoryReturn<State> {
    const [current, setCurrent] = useState(defaultValue)
    // const historyRef = useRef(defaultValue ? [defaultValue] : [])
    const historyRef = useRef([defaultValue, defaultValue])
    const pointerRef = useRef(0)

    console.log('useStateWithHistory return', {
        current, 
        history: historyRef.current,
        pointer: pointerRef.current
    });
    

    const push = useCallback((value: State) => {
        const next = typeof value === "function" ? value(current) : value;

        console.log({current, next, history: historyRef.current});
        
        if (current === next) return;

        if (pointerRef.current < historyRef.current.length - 1) {
            historyRef.current.splice(pointerRef.current + 1);
        }

        historyRef.current.push(next);

        while (historyRef.current.length > capacity) {
            historyRef.current.shift();
        }

        pointerRef.current = historyRef.current.length - 1;

        setCurrent(next);
    }, [capacity, current]);

    const back = useCallbackOnce(() => {
        if (pointerRef.current <= 0) return;
        pointerRef.current--;
        setCurrent(historyRef.current[pointerRef.current]);
    });

    const forward = useCallbackOnce(() => {
        if (pointerRef.current >= historyRef.current.length - 1) return;
        pointerRef.current++;
        setCurrent(historyRef.current[pointerRef.current]);
    });

    const go = useCallbackOnce<(index: number) => void>(index => {
        if (index < 0 || index > historyRef.current.length - 1) return;
        pointerRef.current = index;
        setCurrent(historyRef.current[pointerRef.current]);
    });

    const remove = useCallbackOnce((item: State | number) => {
        let index = typeof item === 'number' ? item : historyRef.current.indexOf(item);
        if (index == -1) index = historyRef.current.length - 1;
        console.log('useStateWithHistory remove', { index, item, history: historyRef.current });
        
        if (index < 0) return;
        historyRef.current = historyRef.current.filter((_, i) => i !== index);

        // Element removed was in history
        if (pointerRef.current > index) pointerRef.current--;
        // Element removed is self
        else if (pointerRef.current == index) {
            pointerRef.current = historyRef.current[pointerRef.current + 1] ? 
                pointerRef.current++ : 
                pointerRef.current > 0 ? 
                pointerRef.current-- : 
                pointerRef.current
        }

        setCurrent(historyRef.current[pointerRef.current]);
    })

    const pop = useCallbackOnce(() => {
        const isPointedTo = historyRef.current.length - 1 === pointerRef.current;
        historyRef.current.pop();

        if (isPointedTo) pointerRef.current--;

        setCurrent(historyRef.current[pointerRef.current]);
    })

    if (historyRef.current.some(s => s === null || s === undefined)) {
        historyRef.current = historyRef.current.filter(s => s);
        setCurrent(historyRef.current[pointerRef.current = historyRef.current.length - 1]);
    }

    return [current, push, { 
        history: historyRef.current, 
        pointer: pointerRef.current, 
        back, forward, go, remove, pop
    }]
}

export default useStateWithHistory;