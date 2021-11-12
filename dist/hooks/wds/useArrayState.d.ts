/// <reference types="react" />
declare type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean;
/**
 * Manages array states
 * @param defaultValue Default array
 * @returns Array, along with methods to modify array
 */
export declare function useArray<Item>(defaultValue: Array<Item>): {
    array: Item[];
    set: import("react").Dispatch<import("react").SetStateAction<Item[]>>;
    push: (item: Item) => void;
    filter: (callback: FilterCallback<Item>) => void;
    update: (i: number, item: Item) => void;
    remove: (i: number) => void;
    clear: () => void;
};
export default useArray;
