import { DependencyList } from "react";
import { TimeoutDelay } from "../useSleep";
import { Callback } from "../../utils/BaseReact";
/**
 * Runs callback after delay time. Resets on dependency change
 * @param callback Callback to run
 * @param delay Time until callback should run
 * @param dependencies Run timeout again if dependencies changed
 */
export declare function useDebounce(callback: Callback, delay: TimeoutDelay, dependencies: DependencyList): void;
export default useDebounce;
