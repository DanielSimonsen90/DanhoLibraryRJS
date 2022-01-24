import { SetStateAction, useCallback, useEffect, useMemo, useRef } from "react";
import { SetStateFunction } from "../utils/BaseReact";
import useArrayState from "./wds/useArrayState";
import { HistoryOptions } from "./wds/useStateWithHistory";

export type PushState<State> = (state: State | ((preState: State) => State)) => number;
export type PopState = () => void;
export type UseStateStackReturn<State> = {
    value: State, 
    push: PushState<State>, 
    pop: PopState,
    size: number
}
export type StackOptions = HistoryOptions & {

}

export function useStateStack<State>(initialValue?: State, options?: StackOptions): UseStateStackReturn<State> {
    const capacity = options?.capacity ?? 10;
    const { length: size, index, push, remove, shift, value: arr } = useArrayState(initialValue ? [initialValue] : []);
    const value = useMemo(() => index(size - 1), [size]);

    useEffect(() => {
        console.log('useStateStack, useEffect', {
            size, value: value != null && value == index(size - 1), arr
        });
    })

    /**@returns Index of stack item */
    const pushState = useCallback((item: SetStateAction<State>) => {
        const _item = typeof item === "function" ? (item as SetStateFunction<State>)(value) : item;

        if (index(size) !== _item) {
            if (size < length - 1) remove(size + 1);

            push(_item);

            while (length > capacity) shift()
        }

        return size;
    }, [capacity, value, size]);

    const pop = useCallback(() => {
        console.log('useStateStack, pop', { arr, value, size });
        remove(value);
    }, [value, size]);

    return { value, push: pushState, pop, size };
}
export default useStateStack;