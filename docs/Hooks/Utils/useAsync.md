# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Utils](index.md) / useAsync
Run something async and get state back through objects.

## [Module](../../../src/hooks/utils/useAsync.ts)
```ts
type Callback<T> = () => Promise<T>
export type useAsyncReturn<T, Err = Error> = {
    /** Value is being process asyncronously */
    loading: boolean
    /** Error happend while handling callback */
    error: Err | undefined
    /** The final result */
    value: T | undefined
}
/**
 * Run something asyncronously - returns object that informs whether callback is still being processed (loading), callback errored (error) or callback finished (value)
 * @param callback Callback to run
 * @param dependencies Dependencies
 */
export function useAsync<T>(callback: Callback<T>, dependencies: DependencyList = []): useAsyncReturn<T>;
export default useAsync;
```

## Example
```tsx
function TestComponent(props) {
    const [query, search, setSearch] = useStateOnChange();
    const { value: data, loading, error } = useAsync(async () => {
        const response = await fetch(`https://some-cool-api/api?query=${query}`);
        const data = await response.json();
        return data;
    }, [query]);

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