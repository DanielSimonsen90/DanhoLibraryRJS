
import { DependencyList, useEffect } from "react"
import useTimeout from "./1.2 useTimeout"
import { Callback, TimeoutDelay } from "../useSleep"
import useEffectOnce from "./useEffectOnce"

/**
 * Runs callback after delay time. Resets on dependency change
 * @param callback Callback to run
 * @param delay Time until callback should run
 * @param dependencies Run timeout again if dependencies changed
 */
export default function useDebounce(callback: Callback, delay: TimeoutDelay, dependencies: DependencyList) {
  const { reset, clear } = useTimeout(callback, delay)
  useEffect(reset, [...dependencies, reset])
  useEffectOnce(clear);
}