import { UseArrayReturn } from "./useArrayState";
export type HistoryOptions = {
    /** @default 10 */
    capacity: number;
};
type UseStateWithHistoryReturn<State> = [
    value: State,
    push: (value: State) => void,
    props: {
        history: UseArrayReturn<State>;
        /**
         * Internal pointer reference. Recommended not to use.
         */
        pointer: number;
        /**
         * Set value of the pointer reference. Preferred to use forward/go/backward instead.
         * @param value Number between 0 and capacity - 1.
         */
        setPointer(value: number): number;
        /**
         * Move pointer forward. Kinda like CTRL + Y
         */
        forward(): void;
        /**
         * Go to specific history index.
         */
        go(index: number): void;
        /**
         * Move pointer backward. Kinda like CTRL + Z
         */
        back(): void;
        /**
         * Remove provided history item or item at index.
         */
        remove(item: State | number): void;
        /**
         * Remove latest history item.
         */
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
