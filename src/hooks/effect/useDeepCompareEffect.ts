import { DependencyList, EffectCallback, useEffect, useRef } from "react"
import isEqual from "lodash/fp/isEqual"

/**
 * useEffect but only runs when dependencies are changed (unrelated state may cause re-render, which can trigger classic useEffect - useDeepCompareEffect does not!)
 * @param callback Effect callback
 * @param dependencies Dependencies
 */
export function useDeepCompareEffect(callback: EffectCallback, dependencies: DependencyList) {
  const currentDependenciesRef = useRef<DependencyList>()

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies
  }

  useEffect(callback, [currentDependenciesRef.current])
}
export const useUpdateEffect = useDeepCompareEffect;
export default useDeepCompareEffect;