import { useState, useEffect, Dispatch, SetStateAction } from "react"
import useCallbackOnce from "../once/useCallbackOnce";

type UseStorageReturn<T> = [value: T, setValue: Dispatch<SetStateAction<T>>, remove: () => void]
type Parse<T> = (value: T) => T;

/**
 * Store a value in LocalStorage using key
 * @param key Key to store value
 * @param defaultValue Fallback value
 * @returns Value matching key in LocalStorage. If no value found, defaultValue is returned
 */
export function useLocalStorage<Key extends string, T>(key: Key, defaultValue: T, parse?: Parse<T>) {
  return useStorage(key, defaultValue, window.localStorage, parse)
}

/**
 * Store a value in SessionStorage using key
 * @param key Key to store value
 * @param defaultValue Fallback value
 * @returns Value matching key in SessionStorage. If no value found, defaultValue is returned
 */
export function useSessionStorage<Key extends string, T>(key: Key, defaultValue: T, parse?: Parse<T>) {
  return useStorage(key, defaultValue, window.sessionStorage, parse)
}

/**
 * Goes through provided storageObject to find value that matches key. Returns defaultValue, if no value was found
 * @param key Storage key
 * @param defaultValue Fallback value
 * @param storageObject Storage type
 * @returns value matching key
 */
function useStorage<Key extends string, T>(key: Key, defaultValue: T, storageObject: Storage, parse?: Parse<T>): UseStorageReturn<T> {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = storageObject.getItem(key);

    return jsonValue != null ? 
      parse ? 
        parse(JSON.parse(jsonValue) as T) : 
        JSON.parse(jsonValue) 
      : typeof defaultValue === 'function' ? 
          defaultValue() : 
          defaultValue;
  });

  useEffect(() => {
    value === undefined ? 
      storageObject.removeItem(key) : 
      storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallbackOnce(() => setValue(undefined as any));
  
  return [value, setValue, remove]
}