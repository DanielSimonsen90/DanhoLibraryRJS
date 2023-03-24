import { useState, useMemo } from "react";
import useEffectOnce from "../once/useEffectOnce";

/**
 * Get the size information about provided element
 * @param query Query to get the element
 */
export function useSize(query: string) {
  const [size, setSize] = useState<DOMRectReadOnly>({} as DOMRectReadOnly);
  const el = useMemo(() => document.querySelector(query), [query]);

  useEffectOnce(() => {
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));
    observer.observe(el);
    return () => observer.disconnect();
  });

  return size;
}
export default useSize;