import { useCallback, useEffect, useMemo, useState } from "react"

type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean

/**
 * Manages array states
 * @param defaultValue Default array
 * @returns Array, along with methods to modify array
 */
export function useArray<Item>(defaultValue: Array<Item>) {
  const [array, setArray] = useState(defaultValue);
  const length = useMemo(() => array.length, [array, array.length]);

  useEffect(() => { console.log('useArrayState, useEffect', array) });

  const push = (item: Item) => setArray(a => [...a, item]);
  const update = (i: number, item: Item) => setArray(a => [...a.slice(0, i), item, ...a.slice(i + 1, a.length)]);
  const filter = (callback: FilterCallback<Item>) => setArray(a => {
    const pre = a;
    const cur = a.filter(callback);
    console.log('useArrayState filter', { pre, cur, a });
    return cur;
  });
  const remove = (i: number | Item) => {
    if (i === undefined || i === null) return;

    let index = typeof i === 'number' ? i : array.indexOf(i);    
    console.log('useArrayState, remove', {i});
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  };
  const clear = () => setArray([]);
  const shift = () => remove(0);
  const index = (i: number) => array[i];

  console.log('useArrayState return', { array, length });
  
  return { 
    value: array, length,
    push, 
    filter, update,
    remove, clear, shift,
    index 
  }
}
export default useArray;