import { useEffect, useRef } from "react"

/**
 * Returns how many times the component has been re-rendered
 */
export default function useRenderCount() {
  const count = useRef(1);
  useEffect(() => { count.current++ });
  return count.current;
}