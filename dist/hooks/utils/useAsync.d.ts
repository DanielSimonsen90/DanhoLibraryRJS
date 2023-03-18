import { DependencyList } from "react";
type Callback<T> = () => Promise<T>;
export type useAsyncReturn<T, Err = Error> = {
    /** Value is being process asyncronously */
    loading: boolean;
    /** Error happend while handling callback */
    error: Err | undefined;
    /** The final result */
    value: T | undefined;
    /** The callback passed, memoized to modify internal state */
    callback: Callback<void>;
};
/**
 * Run something asyncronously - returns object that informs whether callback is still being processed (loading), callback errored (error) or callback finished (value)
 * @param callback Callback to run
 * @param dependencies Dependencies
 */
export declare function useAsync<Value, Err = Error>(callback: Callback<Value>, dependencies?: DependencyList): useAsyncReturn<Value, Err>;
export default useAsync;
