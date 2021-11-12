
import { DependencyList, useEffect } from "react"
import useTimeout from "./useTimeout"
import { TimeoutDelay } from "../useSleep"
import useEffectOnce from "./useEffectOnce"
import { Callback } from "../../utils/BaseReact"

/**
 * Runs callback after delay time. Resets on dependency change
 * @param callback Callback to run
 * @param delay Time until callback should run
 * @param dependencies Run timeout again if dependencies changed
 */
export function useDebounce(callback: Callback, delay: TimeoutDelay, dependencies: DependencyList) {
  const { reset, clear } = useTimeout(callback, delay)
  useEffect(reset, [...dependencies, reset])
  useEffectOnce(clear);
}
export default useDebounce;