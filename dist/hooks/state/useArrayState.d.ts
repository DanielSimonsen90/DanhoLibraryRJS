declare type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean;
declare type ArrayModifies<T> = Record<'clear' | 'shift' | 'pop', () => void> & {
    push(item: T): void;
    update(index: number, item: T): void;
    filter(callback: FilterCallback<T>): void;
    remove(i: number | T): T | undefined;
};
export declare type UseArrayReturn<T> = {
    value: Array<T>;
} & ArrayModifies<T> & Pick<Omit<Array<T>, keyof ArrayModifies<T>>, 'find' | 'some' | 'includes' | 'every' | 'random' | 'reduce' | 'map' | 'forEach' | 'findIndex' | 'indexOf' | 'index' | 'lastIndexOf' | 'keys' | 'values' | 'join' | 'length'>;
/**
 * Manages array states
 * @param defaultValue Default array
 * @returns Array, along with methods to modify array
 */
export declare function useStateArray<Item>(defaultValue?: Array<Item>): UseArrayReturn<Item>;
export default useStateArray;
