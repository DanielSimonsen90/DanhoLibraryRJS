declare type HistoryOptions = {
    /** Default: 10 */
    capacity: number;
};
/**
 * useState but you can go back to the previous values
 * @param defaultValue Default state value
 * @param options History options
 */
export declare function useStateWithHistory<T>(defaultValue: T, { capacity }: HistoryOptions): (T | ((v: any) => void) | {
    history: T[];
    pointer: number;
    back: () => void;
    forward: () => void;
    go: (index: number) => void;
})[];
export default useStateWithHistory;
