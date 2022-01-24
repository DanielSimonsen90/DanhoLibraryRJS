import { DependencyList } from "react";
import { TimeDelay } from 'danholibraryjs';
import { Callback } from "../../utils/BaseReact";
/**
 * Runs callback after delay time. Resets on dependency change
 * @param callback Callback to run
 * @param delay Time until callback should run
 * @param dependencies Run timeout again if dependencies changed
 */
export declare function useDebounce(callback: Callback, delay: TimeDelay, dependencies: DependencyList): void;
export default useDebounce;
