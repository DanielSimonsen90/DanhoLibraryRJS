# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Effect](./index.md) / useDebounce
Runs callback after delay time. Resets on dependency change.

## References
* Hooks
    * [useEffectOnce](../Once/useEffectOnce.md)
    * [useTimeout](../Utils/useTimeout.md)

## [Module](../../../src/hooks/effect/useDebounce.ts)
```ts
export function useDebouce(callback: () => void, delay: string | number, dependencies: DependencyList): void
export default useDebounce;
```

## Usage
```tsx
function TestComponent(props) {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useDebounce(() => {
        setQuery(search);
    }, 1000, [search]);
    
    useEffect(() => {
        // Query API
    }, [query])

    return (
        <input type="text" onChange={e => setSearch(e.target.value)} value={search}>
    );
}
```