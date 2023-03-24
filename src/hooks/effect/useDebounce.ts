
import { DependencyList, useEffect } from "react";
import { TimeDelay } from 'danholibraryjs';
import useEffectOnce from "../once/useEffectOnce";
import { Callback } from "../../utils/BaseReact";
import useTimeout from "../utils/useTimeout";

/**
 * Runs callback after delay time. Resets on dependency change
 * @param callback Callback to run
 * @param delay Time until callback should run
 * @param dependencies Run timeout again if dependencies changed
 */
export function useDebounce(callback: Callback, delay: TimeDelay, dependencies: DependencyList) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffectOnce(clear);
}
export default useDebounce;