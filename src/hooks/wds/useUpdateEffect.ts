
import { DependencyList, useEffect, useRef } from "react"
import { Callback } from "../../utils/BaseReact";

/**
 * useEffect, but it doesn't run on first render
 * @param callback Callback to run when dependencies update
 * @param dependencies Dependencies
 */
export function useUpdateEffect(callback: Callback, dependencies?: DependencyList) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
export default useUpdateEffect;