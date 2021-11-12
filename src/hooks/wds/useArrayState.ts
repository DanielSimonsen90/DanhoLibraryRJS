import { useState } from "react"

type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean

/**
 * Manages array states
 * @param defaultValue Default array
 * @returns Array, along with methods to modify array
 */
export function useArray<Item>(defaultValue: Array<Item>) {
  const [array, setArray] = useState(defaultValue)

  const push = (item: Item) => setArray(a => [...a, item]);
  const filter = (callback: FilterCallback<Item>) => setArray(a => a.filter(callback));
  const update = (i: number, item: Item) => setArray(a => [...a.slice(0, i), item, ...a.slice(i + 1, a.length)]);
  const remove = (i: number) => setArray(a => [...a.slice(0, i), ...a.slice(i + 1, a.length)]);
  const clear = () => setArray([]);

  return { array, set: setArray, push, filter, update, remove, clear }
}
export default useArray;