declare type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean;
/**
 * Manages array states
 * @param defaultValue Default array
 * @returns Array, along with methods to modify array
 */
export declare function useArray<Item>(defaultValue: Array<Item>): {
    value: Item[];
    length: number;
    push: (item: Item) => void;
    filter: (callback: FilterCallback<Item>) => void;
    update: (i: number, item: Item) => void;
    remove: (i: number | Item) => void;
    clear: () => void;
    shift: () => void;
    index: (i: number) => Item;
};
export default useArray;
