import { DependencyList } from "react";
import { Callback } from "../../utils/BaseReact";
/**
 * useEffect, but it doesn't run on first render
 * @param callback Callback to run when dependencies update
 * @param dependencies Dependencies
 *
 * @depricated use useDeepCompareEffect instead
 */
export declare function useUpdateEffect(callback: Callback, dependencies?: DependencyList): void;
export default useUpdateEffect;
