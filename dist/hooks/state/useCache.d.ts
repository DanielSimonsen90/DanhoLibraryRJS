import { DependencyList } from "react";
import { useFetchReturn } from "../utils/useFetch";
/**
 * Fetch a resource from the server and cache it in sessionStorage.
 *
 * @param url URL to fetch
 * @param options Request options - optional
 * @param dependencies Re-fetch on dependency change - optional
 * @returns useAsyncReturn<Value> - { loading, error, value }
 */
export declare function useCache<Value, Err>(url: string, options?: RequestInit, dependencies?: DependencyList): useFetchReturn<Value, Err>;
export default useCache;
