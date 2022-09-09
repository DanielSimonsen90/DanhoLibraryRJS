# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Utils](index.md) / useLoadData

Render components based on loading state.

## References

- [Hooks](../index.md)
  - [useAsync](useAsync.md)

## [Module](../../../src/hooks/utils/useLoadData.ts)

```ts
type Functionable<Return, T extends any[] = any> =
	| ((...args: T) => Return)
	| Return;
export type UseLoadDataReturn = [component: Component | null, loading: boolean];
export type UseLoadDataProps<T> = Partial<{
	loadingComponent: Functionable<Component>;
	errorComponent: Functionable<Component, [error: Error]>;
	valueComponent: Functionable<Component, [value: T]>;
}>;

export function useLoadData<T>(
	callback: Callback<Promise<T>>,
	props: UseLoadDataProps<T>,
	dependencies?: DependencyList
): UseLoadDataReturn;
export default useLoadData;
```

## Example

```tsx
function TestComponent(props) {
    const [query, search, setSearch] = useStateOnChange("", 1000);
    const [Component, loading] = useLoadData(async () => {
        const response = await fetch(`https://some-cool-api/api/movies?name=${query}`);
        const data = await response.json();
        return data;
    }, {
        loadingComponent: <p>Loading...</p>,
        errorComponent: err => (
            <div className="error">
                <h1>There was an error!</h1>
                <p>{error.message}</p>
            </div>
        ),
        valueComponent: movies => movies.map(movie => (
            // Render movie
        ))
    }, [query]);

    return (
        <section className="cinema">
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for movie name...">
            <Component />
        </section>
    )
}
```
