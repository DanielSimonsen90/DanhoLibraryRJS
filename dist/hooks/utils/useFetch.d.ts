import { DependencyList } from "react";
declare type FetchOptions = RequestInit & {};
/**
 * fetch but with dependencies
 * @param url URL to fetch
 * @param options Fetch Options
 * @param dependencies Dependency list
 * @returns Fetch response
 */
export declare function useFetch(url: string, options?: FetchOptions, dependencies?: DependencyList): import("./useAsync").useAsyncReturn<Response, Error>;
export default useFetch;
