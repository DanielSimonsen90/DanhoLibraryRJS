# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Utils](index.md) / useTimeout
setTimeout but it's a hook

## References
* [Hooks](../index.md)
    * [useCallbackOnce](../Once/useCallbackOnce.md)
* External
    * { ms } from danholibraryjs

## [Module](../../../src/hooks/utils/useTimeout.ts)
```ts
/**
 * Smarter version of setTimeout - provides clear() & reset() functions and doesn't get messed up due to re-renders
 * @param callback Callback to run, once timeout is done
 * @param delay Timeout delay - smart-string or millisecond value
 * @returns Object containing reset & clear methods
 */
export function useTimeout(callback: Callback, delay: TimeDelay): {
    reset(): void,
    clear(): void
}
export default useTimeout;
```

## Example
```tsx
function TestComponent(props) {
    const [query, setQuery] = useState("");
    const [data, setData] = useState(null);
    const { reset, clear } = useTimeout(() => {
        fetch(`https://some-cool-api/api?query=${query}`)
            .then(res => res.json())
            .then(setData);
    }, 1000);

    // Clear the timeout on unmount
    useEffect(() => clear, []);

    useEffect(() => {
        // Still typing, don't fetch yet
        reset();
    }, [query]);
    
    return (
        <section>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search...">
            <div id="results">
                {data?.map(item => (
                    // Render item
                ))}
            </div>
        </section>
    );
}
```