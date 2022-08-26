import { DependencyList, useEffect } from "react";
import useFetch, { useFetchReturn } from "../utils/useFetch";
import { useSessionStorage } from "./useStorage";

/**
 * Fetch a resource from the server and cache it in sessionStorage. 
 * 
 * @param url URL to fetch
 * @param options Request options - optional
 * @param dependencies Re-fetch on dependency change - optional
 * @returns useAsyncReturn<Value> - { loading, error, value }
 */
export function useCache<Value, Err>(url: string, options: RequestInit = {}, dependencies: DependencyList = []): useFetchReturn<Value, Err> {
    const { value: fetched, loading, error, fetch } = useFetch<Value, Err>(url, options, dependencies);
    const [cached, set, remove] = useSessionStorage(url, fetched);

    useEffect(() => {
        if (!loading && !error && fetched) {
            set(fetched);
        }
    }, [fetched]);

    return { value: cached || fetched, loading, error, fetch };
}
export default useCache;