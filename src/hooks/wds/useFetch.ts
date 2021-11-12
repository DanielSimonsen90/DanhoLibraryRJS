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
    return useAsync<Response>(() => 
        fetch(url, { ...DefaultOptions, ...options })
            .then(async res => res.ok ? 
                res.json() : 
                await Promise.reject(await res.json())
    ), dependencies)
}
export default useFetch;