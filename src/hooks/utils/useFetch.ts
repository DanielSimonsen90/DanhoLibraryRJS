import { DependencyList, useCallback } from "react";
import useAsync, { useAsyncReturn } from "./useAsync";

type FetchOptions = RequestInit & {}
export type useFetchReturn<T, Err> = Omit<useAsyncReturn<T, Err>, 'callback'> & {
    fetch: () => Promise<T>
}

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
export function useFetch<Body, Err>(url: string, options: FetchOptions = {}, dependencies: DependencyList = []): useFetchReturn<Body, Err> { 
    const callback = useCallback<() => Promise<Body>>(async () => {
        const res = await fetch(url, { ...DefaultOptions, ...options });
        if (!res.ok) return Promise.reject(
            (await res.json()) ?? 
            (await res.text())
        );

        return res.json();
    }, dependencies)
    const { callback: _, ...asyncResult } = useAsync<Body, Err>(callback, dependencies);
    return { ...asyncResult, fetch: callback };
}
export default useFetch;