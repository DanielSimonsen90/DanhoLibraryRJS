import { useState, RefObject } from "react"
import useEffectOnce from "./useEffectOnce"

/**
 * Get the size information about provided element
 * @param ref Element to reference
 */
export default function useSize<T extends HTMLElement>(ref: RefObject<T>) {
  const [size, setSize] = useState<DOMRectReadOnly>({} as DOMRectReadOnly);

  useEffectOnce(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));
    observer.observe(ref.current);
    return () => observer.disconnect();
  });

  return size;
}