import { HistoryOptions } from "./useStateWithHistory";
export declare type PushState<State> = (state: State) => number;
export declare type PopState = () => void;
export declare type UseStateStackReturn<State> = {
    value?: State;
    push: PushState<State>;
    pop: PopState;
    size: number;
};
export declare type StackOptions = HistoryOptions;
/**
 * Simple stack object
 * @param initialValue Initial stack value
 * @param options Options which atm is only capacity
 * @returns Stack properties
 */
export declare function useStack<State>(initialValue?: State, options?: StackOptions): UseStateStackReturn<State>;
export default useStack;
