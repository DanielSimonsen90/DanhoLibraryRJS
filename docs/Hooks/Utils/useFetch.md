# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Utils](index.md) / useFetch
Fetch every dependency change

## References
* [Hooks](../index.md)
    * [useAsync](./useAsync.md)

## [Module](../../../src/hooks/utils/useFetch.ts)
```ts
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
export function useFetch<Body, Err>(url: string, options: FetchOptions = {}, dependencies: DependencyList = []): useFetchReturn<Body, Err>;
export default useFetch;
```

## Example
```tsx
function TestComponent(props) {
    const [query, search, setSearch] = useStateOnChange();
    const { value: data, loading, error } = useFetch(`https://some-cool-api/api?query=${query}`, null, [query]);

    return (
        <section>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search...">
            <div id="results">
             {error && (
                <div className="error">
                    <h1>Error in search</h1>
                    <p>{error.message}</p>
                </div>
             )}
             {loading && <p>Loading...</p>}
             {data.map(item => (
                // Render item
             ))}
            </div>
        </section>
    );
}
```