
import { DependencyList, useEffect, useRef } from "react"
import { Callback } from "../useSleep"

/**
 * useEffect, but it doesn't run on first render
 * @param callback Callback to run when dependencies update
 * @param dependencies Dependencies
 */
export default function useUpdateEffect(callback: Callback, dependencies: DependencyList) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}