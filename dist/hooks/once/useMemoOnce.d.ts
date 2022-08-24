import { Callback } from "../../utils";
/**
 * useMemo but it only runs once
 * @param factory Memo-callback to run once
 */
export declare const useMemoOnce: <Value>(factory: Callback<Value, any>) => Value;
export default useMemoOnce;
