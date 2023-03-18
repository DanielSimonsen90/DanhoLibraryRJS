import { DependencyList } from "react";
import { useAsyncReturn } from "./useAsync";
type FetchOptions = RequestInit & {};
export type useFetchReturn<T, Err> = Omit<useAsyncReturn<T, Err>, 'callback'> & {
    fetch: () => Promise<T>;
};
/**
 * fetch but with dependencies
 * @param url URL to fetch
 * @param options Fetch Options
 * @param dependencies Dependency list
 * @returns Fetch response
 */
export declare function useFetch<Body, Err>(url: string, options?: FetchOptions, dependencies?: DependencyList): useFetchReturn<Body, Err>;
export default useFetch;
