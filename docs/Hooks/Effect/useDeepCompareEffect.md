# [DanhoLibaryRJS](../../index.md) / [Hooks](../index.md) / [Effect](./index.md) / useDeepCompareEffect
useEffect but only runs when dependencies are changed (unrelated state may cause re-render, which can trigger classic useEffect - useDeepCompareEffect does not!)

## [Module](../../../src/hooks/effect/useDeepCompareEffect.ts)
```ts
export function useDeepCompareEffect(callback: EffectCallback, dependencies: DependencyList): void;
export default useDeepCompareEffect;
```

## Usage
```tsx
function TestComponent(props) {
    const [num, setNum] = useState(0);

    useDeepCompareEffect(() => {
        console.log("Num changed - this is after initial render")
    }, [num]);

    return (
        <input type="number" value={num} onChange={e => setNum(e.taget.value)}>
    )
}
```