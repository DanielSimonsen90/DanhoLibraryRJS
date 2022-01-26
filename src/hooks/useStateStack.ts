import { useMemo, useState } from "react";
import { HistoryOptions } from "./wds/useStateWithHistory";

export type PushState<State> = (state: State) => number;
export type PopState = () => void;
export type UseStateStackReturn<State> = {
    value?: State, 
    push: PushState<State>, 
    pop: PopState,
    size: number
}
export type StackOptions = HistoryOptions & {

}

export function useStateStack<State>(initialValue?: State, options?: StackOptions): UseStateStackReturn<State> {
    const capacity = options?.capacity ?? 10;
    const [array, setArray] = useState(initialValue ? [initialValue] : []);
    const size = useMemo(() => array.length, [array]);
    const value = useMemo(() => array[size - 1], [size]);

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

        setArray(a => [...a, item])
        return size;
    }
    const pop = () => setArray(a => a.slice(0, -1));

    return { value, push, pop, size };
}
export default useStateStack;