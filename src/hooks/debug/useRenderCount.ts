import { useEffect, useRef } from "react";

/**
 * Returns how many times the component has been re-rendered
 */
export function useRenderCount() {
  const count = useRef(1);
  useEffect(() => { count.current++; });
  return count.current;
}
export default useRenderCount;