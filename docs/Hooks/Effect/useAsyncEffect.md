# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Effect](./index.md) / useAsyncEffect
useEffect but you can use async code as a callback

## References
* Hooks
    * [useEffectOnce](../Once/useEffectOnce.md)

## [Module](../../../src/hooks/effect/useAsyncEffect.ts)
```ts
type AsyncEffectCallback = () => Promise<(void | Destructor)>
type Callback = AsyncEffectCallback | EffectCallback

export function useAsyncEffect(callback: Callback, dependencies: DependencyList): void
export function useAsyncEffectOnce(callback: Callback): void
```

## Usage
```tsx
function TestComponent({ apiUrl }) {
    const [data, setData] = useState(null);

    useAsyncEffect(async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setData(data);
    }, [apiUrl]);

    return (
        <div>
            {data ? 
                <p>Data received! {data.message}</p> : 
                <p>Fetching data...</p>
            }
        </div>
    );
}
```