import { Dispatch, SetStateAction, useMemo, useState } from "react";

type FilterCallback<T> = (value: T, index: number, array: Array<T>) => boolean;
type ArrayModifies<T> = Record<'clear' | 'shift' | 'pop', () => void> & {
  push(item: T): void,
  update(index: number, item: T): void,
  filter(callback: FilterCallback<T>): void,
  remove(i: number | T): T | undefined,
};

export type UseArrayReturn<T> = {
  value: Array<T>;
  set: Dispatch<SetStateAction<Array<T>>>;
} &
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
export function useArrayState<Item>(defaultValue?: Array<Item>): UseArrayReturn<Item> {
  const [array, setArray] = useState(defaultValue ?? []);
  const arrayProps = useMemo(() => {
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
    };
  }, [array]);

  const push = (item: Item) => setArray(a => [...a, item]);
  const update = (i: number, item: Item) => setArray(a => [...a.slice(0, i), item, ...a.slice(i + 1, a.length)]);
  const filter = (callback: FilterCallback<Item>) => setArray(a => a.filter(callback));
  const remove = (i: number | Item) => {
    if (i === undefined || i === null) return undefined;

    let index = typeof i === 'number' ? i : array.indexOf(i);
    const item = array[index];
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
    return item;
  };
  const clear = () => setArray([]);
  const shift = () => remove(0);
  const pop = () => remove(array.length - 1);

  return {
    ...arrayProps,
    value: array,
    set: setArray,
    push,
    filter, update,
    remove, clear, shift, pop
  };
}
export default useArrayState;