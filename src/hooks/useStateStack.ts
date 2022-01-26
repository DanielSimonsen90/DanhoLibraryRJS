import { SetStateAction } from "react";
import { SetStateFunction } from "../utils/BaseReact";
import useStateWithHistory, { HistoryOptions } from "./wds/useStateWithHistory";

export type PushState<State> = (state: State | ((preState: State) => State)) => number;
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
    const [value, push, { pop: _pop, history, setPointer }] = useStateWithHistory(initialValue, { capacity: 3 });

    /**@returns Index of stack item */
    const pushState = (item: SetStateAction<State>) => {
        const next = typeof item === "function" ? (item as SetStateFunction<State>)(value as State) : item;

        console.log('useStateStack push', { value, next });
        

        if (value !== next) {
            push(next);
            
            while (history.length > capacity) history.shift()
            setPointer(history.length);
        }

        return history.length;
    };

    const pop = () => {
        console.log('useStateStack pop', { value, history });
        _pop();
    }
    
    console.log('useStateStack, return', { size: history.length, value });
    return { value, push: pushState, pop, size: history.length };
}
export default useStateStack;