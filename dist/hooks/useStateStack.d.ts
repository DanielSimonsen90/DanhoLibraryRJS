import { HistoryOptions } from "./wds/useStateWithHistory";
export declare type PushState<State> = (state: State | ((preState: State) => State)) => number;
export declare type PopState = () => void;
export declare type UseStateStackReturn<State> = {
    value: State;
    push: PushState<State>;
    pop: PopState;
    size: number;
};
export declare type StackOptions = HistoryOptions & {};
export declare function useStateStack<State>(initialValue?: State, options?: StackOptions): UseStateStackReturn<State>;
export default useStateStack;
