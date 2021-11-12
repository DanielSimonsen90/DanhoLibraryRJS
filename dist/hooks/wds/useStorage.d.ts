import { Dispatch, SetStateAction } from "react";
/**
 * Store a value in LocalStorage using key
 * @param key Key to store value
 * @param defaultValue Fallback value
 * @returns Value matching key in LocalStorage. If no value found, defaultValue is returned
 */
export declare function useLocalStorage<Key extends string, T>(key: Key, defaultValue: T): UseStorageReturn<T>;
/**
 * Store a value in SessionStorage using key
 * @param key Key to store value
 * @param defaultValue Fallback value
 * @returns Value matching key in SessionStorage. If no value found, defaultValue is returned
 */
export declare function useSessionStorage<Key extends string, T>(key: Key, defaultValue: T): UseStorageReturn<T>;
declare type UseStorageReturn<T> = [value: T, setValue: Dispatch<SetStateAction<T>>, remove: () => void];
export {};
