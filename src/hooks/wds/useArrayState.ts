import { useCallback, useEffect, useMemo, useState } from "react"

type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean
type ArrayModifies<T> = Record<'clear' | 'shift' | 'pop', () => void> & {
  push(item: T): void,
  update(index: number, item: T): void,
  filter(callback: FilterCallback<T>): void,
  remove(i: number | T): T | undefined,
}
export type UseArrayReturn<T> = { value: Array<T> } & 
  ArrayModifies<T> &
  Pick<Omit<Array<T>, keyof ArrayModifies<T>>, 
    'find' | 'some' | 'includes' | 'every' | 'random' |
    'reduce' | 'map' | 'forEach' |
    'findIndex' | 'indexOf' | 'index' | 'lastIndexOf' |
    'keys' | 'values' | 'join' |
    'length'
  >;

/**
 * Manages array states
 * @param defaultValue Default array
 * @returns Array, along with methods to modify array
 */
export function useStateArray<Item>(defaultValue?: Array<Item>): UseArrayReturn<Item> {
  const [array, setArray] = useState(defaultValue ?? []);
  const arrayProps = useMemo(() => {
    console.log('useArray arrayProps memo update', array);

    const { 
      find, some, includes, every, random, 
      reduce, map, forEach, 
      findIndex, indexOf, lastIndexOf, 
      keys, values, join, 
      length 
    } = array;

    const index = (index: number) => array[index];

    return {
      find, some, includes, every, random,
      reduce, map, forEach,
      findIndex, indexOf, index, lastIndexOf,
      keys, values, join,
      length
    }
  }, [array])

  useEffect(() => { console.log('useArrayState, useEffect', array) });

  const push = (item: Item) => setArray(a => [...a, item]);
  const update = (i: number, item: Item) => setArray(a => [...a.slice(0, i), item, ...a.slice(i + 1, a.length)]);
  const filter = (callback: FilterCallback<Item>) => setArray(a => {
    const pre = a;
    const cur = a.filter(callback);
    console.log('useArrayState filter', { pre, cur, a });
    return cur;
  });
  const remove = useCallback((i: number | Item) => {
    if (i === undefined || i === null) return undefined;

    let index = typeof i === 'number' ? i : array.indexOf(i);    
    const item = array[index];
    console.log('useArrayState, remove', { i, item, array });
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
    return item;
  }, [array]);
  const clear = () => setArray([]);
  const shift = () => remove(0);
  const pop = useCallback(() => {
    console.log('useArrayState pop', { array, index: array.length - 1 });
    remove(array.length - 1);
  }, [array]);

  console.log('useArrayState return', { array });

  return { ...arrayProps,
    value: array,
    push, 
    filter, update,
    remove, clear, shift, pop
  }
}
export default useStateArray;