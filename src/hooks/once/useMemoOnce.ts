import { useMemo } from "react"
import { Callback } from "../../utils";

/**
 * useMemo but it only runs once
 * @param factory Memo-callback to run once
 */
export const useMemoOnce = <Value>(factory: Callback<Value>) => useMemo(factory, []);
export default useMemoOnce;