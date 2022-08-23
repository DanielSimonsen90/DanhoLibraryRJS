# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Effect](./index.md) / useThrottle
Run provided callback once, then wait after timeout to be able to run callback again.

## [Module](../../../src/hooks/effect/useThrottle.ts)
```ts
export function useThrottle(callback: (...args: any[]) => void, timeout: number | string): (...args: any[]) => void
export default useThrottle;
```

## Usage
```ts
function TestComponent(props) {
    // I'll come back to making throttle seem useful

    return <></>;
}
```