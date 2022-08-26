# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [State](index.md) / useStateOnChange
useState but only change on debounce. Useful for avoiding API spam.

## References
* [Hooks](../index.md)
    * [useDebounce](../Effect/useDebounce.md)

## [Module](../../../src/hooks/state/useStateOnChange.ts)
```ts
/**
 * @param state The state that is debounced
 * @param stateChange The state that changes out of debounce - triggers debounce restart
 * @param setStateChange Setter for stateChange
*/
type UseStateOnChangeReturn<T> = [state: T, stateChange: T, setStateChange: Dispatch<SetStateAction<T>>]

/**
 * useState but only change after not being interrupted for timeout
 * @param initialState Initial/Default state
 * @param timeout Timeout until state can change
 * @returns [state after timeout, changable state, onChange/setState]
 */
export function useStateOnChange<T>(initialState: T, timeout: TimeDelay): UseStateOnChangeReturn<T>;
export function useStateChange;
```

## Example
```tsx
function TestComponent(props) {
    const [query, search, setSearch] = useStateOnChange("", 1000);
    const [data, setData] = useState(null);
    const executeQuery = useCallback(query => {
        const res = await fetch(`https://some-cool-api/api/data?query=${query}`);
        const data = await res.json();
        setData(JSON.parse(data));
    });

    useEffect(() => {
        executeQuery(query);
    }, [query]);

    return (
        <section>
            <div id="search">
                <input type="text" value={search} onChange={e => setSearch(e.target.value)}>
                <Button iconName="search" onClick={() => executeQuery(query)}>Search</Button>
            </div>
            <div id="query-results">
                {data.map(item => (
                    // Render data here
                ))}
            </div>
        </section>
    )
}
```