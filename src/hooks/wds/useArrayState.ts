import { useEffect, useMemo, useState } from "react"

type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean

/**
 * Manages array states
 * @param defaultValue Default array
 * @returns Array, along with methods to modify array
 */
export function useArray<Item>(defaultValue: Array<Item>) {
  const [array, set] = useState(defaultValue);
  const length = useMemo(() => array.length, [array, array.length]);

  useEffect(() => { console.log('useArrayState, useEffect', array) });
  (window as any).logit = () => array;

  const push = (item: Item) => set(a => [...a, item]);
  const update = (i: number, item: Item) => set(a => [...a.slice(0, i), item, ...a.slice(i + 1, a.length)]);
  const filter = (callback: FilterCallback<Item>) => set(a => {
    const pre = a;
    const cur = a.filter(callback);
    console.log('useArrayState filter', { pre, cur, a });
    return cur;
  });
  const remove = (i: number | Item) => {
    if (!i) return;
    
    console.log('useArrayState, remove', {i});
    return filter((value, index) => 
    typeof i === 'number' ? 
      index !== i :
      value !== i
  );
  }
  const clear = () => set([]);
  const shift = () => remove(0);
  const index = (i: number) => array[i];

  return { 
    value: array, length,
    set, push, 
    filter, update,
    remove, clear, shift,
    index 
  }
}
export default useArray;