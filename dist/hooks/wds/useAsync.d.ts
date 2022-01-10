import { DependencyList } from "react";
declare type Callback<T> = () => Promise<T>;
export declare type useAsyncReturn<T, Err = Error> = {
    /** Value is being process asyncronously */
    loading: boolean;
    /** Error happend while handling callback */
    error: Err | undefined;
    /** The final result */
    value: T | undefined;
};
/**
 * Run something asyncronously - returns object that informs whether callback is still being processed (loading), callback errored (error) or callback finished (value)
 * @param callback Callback to run
 * @param dependencies Dependencies
 */
export declare function useAsync<T>(callback: Callback<T>, dependencies?: DependencyList): useAsyncReturn<T>;
export default useAsync;
