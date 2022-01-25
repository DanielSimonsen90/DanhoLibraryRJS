export declare type HistoryOptions = {
    /** Default: 10 */
    capacity: number;
};
declare type UseStateWithHistoryReturn<State> = [
    value: State,
    set: (value: State) => void,
    props: {
        history: State[];
        pointer: number;
        back(): void;
        forward(): void;
        go(index: number): void;
        remove(item: State | number): void;
        pop(): void;
    }
];
/**
 * useState but you can go back to the previous values
 * @param defaultValue Default state value
 * @param options History options
 */
export declare function useStateWithHistory<State>(defaultValue: State, { capacity }: HistoryOptions): UseStateWithHistoryReturn<State>;
export default useStateWithHistory;
