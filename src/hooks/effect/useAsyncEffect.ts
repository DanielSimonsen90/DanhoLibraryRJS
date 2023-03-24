import { DependencyList, EffectCallback, useEffect } from "react";
import useEffectOnce from "../once/useEffectOnce";

// Un-exported from react
declare const UNDEFINED_VOID_ONLY: unique symbol;
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never; };

type AsyncEffectCallback = () => Promise<(void | Destructor)>;
type Callback = AsyncEffectCallback | EffectCallback;

export function useAsyncEffect(callback: Callback, dependencies: DependencyList) {
  return useEffect(() => { callback(); }, dependencies);
}
export function useAsyncEffectOnce(callback: Callback) {
  return useEffectOnce(() => { callback(); });
}