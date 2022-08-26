# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [State](index.md) / useCache
Fetch a resource from the server and cache it in sessionStorage. Value is removed from sessionStorage on unmount.

## References
* [Hooks](../index.md)
    * [useFetch](../Utils/useFetch.md)
    * [useSessionStorage](./useStorage.md)

## [Module](../../../src/hooks/state/useCache.ts)
```ts
/**
 * Fetch a resource from the server and cache it in sessionStorage. 
 * 
 * @param url URL to fetch
 * @param options Request options - optional
 * @param dependencies Re-fetch on dependency change - optional
 * @returns useAsyncReturn<Value> - { loading, error, value }
 */
export function useCache<Value, Err>(url: string, options: RequestInit = {}, dependencies: DependencyList = []): useFetchReturn<Value, Err>;
export default useCache;
```

## Example
```tsx
function TestComponent(props) {
    const [query, search, setSearch] = useStateOnChange("", 1000);
    const { value: movies, loading, error, fetch } = useCache(`https://some-cool-api/api?movies=${query}`, [query]);

    return (
        <section>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for movies...">
            <div id="results">
                {movies.map(movie => (
                    // Render movie
                ))}
            </div>
        </section>
    )
}
```