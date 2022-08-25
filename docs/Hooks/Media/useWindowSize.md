# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Media](index.md) / useWindowSize
Get the size of the window.

## References
* [Hooks](../index.md)
    * [useEventListener](../Events/useEventListener.md)

## [Module](../../../src/hooks/media/useWindowSize.ts)
```ts
/**
 * Information about the current window size
 * @returns Dimensions of the current window
 */
export function useWindowSize(): {
    height: number,
    width: number
}
export default useWindowSize;
```

## Example
```tsx
function TestComponent(props) {
    const { width, height } = useWindowSize();

    return (
        <p>The current window size is {height} x {width}</p>
    )
}
```