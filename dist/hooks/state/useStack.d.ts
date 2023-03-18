import { HistoryOptions } from "./useStateWithHistory";
export type PushState<State> = (state: State) => number;
export type ToVoid = () => void;
export type UseStateStackReturn<State> = {
    value?: State;
    push: PushState<State>;
    pop: ToVoid;
    clear: ToVoid;
    size: number;
};
export type StackOptions = HistoryOptions;
/**
 * Simple stack object
 * @param initialValue Initial stack value
 * @param options Options which atm is only capacity
 * @returns Stack properties
 */
export declare function useStack<State>(initialValue?: State, options?: StackOptions): UseStateStackReturn<State>;
export default useStack;
