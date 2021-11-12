import { DependencyList, EffectCallback } from "react";
/**
 * useEffect but only runs when dependencies are changed (unrelated state may cause re-render, which can trigger classic useEffect - useDeepCompareEffect does not!)
 * @param callback Effect callback
 * @param dependencies Dependencies
 */
export declare function useDeepCompareEffect(callback: EffectCallback, dependencies: DependencyList): void;
export default useDeepCompareEffect;
