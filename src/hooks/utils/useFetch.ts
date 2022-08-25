import { DependencyList } from "react";
import useAsync from "./useAsync";

type FetchOptions = RequestInit & {}

const DefaultOptions: FetchOptions = {
  headers: { "Content-Type": "application/json" },
}

/**
 * fetch but with dependencies
 * @param url URL to fetch
 * @param options Fetch Options
 * @param dependencies Dependency list
 * @returns Fetch response
 */
export function useFetch(url: string, options: FetchOptions = {}, dependencies: DependencyList = []) { 
    return useAsync<Response>(async () => {
        const res = await fetch(url, { ...DefaultOptions, ...options });
        if (!res.ok) return Promise.reject(
            (await res.json()) ?? 
            (await res.text())
        );

        return res.json();
    }, dependencies);
}
export default useFetch;