# [DanhoLibaryRJS](../../index.md) / [Hooks](../index.md) / [Effect](./index.md) / useUpdateEffect
useEffect, but it doesn't run on first render

> **Note**: This hook is _depricated_ - use [useDeepCompareEffect](./useDeepCompareEffect.md) instead.

## [Module](../../../src/hooks/effect/useDeepCompareEffect.ts)
```ts
export function useUpdateEffect(callback: EffectCallback, dependencies: DependencyList): void;
export default useDeepCompareEffect;
```

## Usage
```tsx
function TestComponent(props) {
    const [num, setNum] = useState(0);

    useUpdateEffect(() => {
        console.log("Num changed - this is after initial render")
    }, [num]);

    return (
        <input type="number" value={num} onChange={e => setNum(e.taget.value)}>
    )
}
```