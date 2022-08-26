# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Media](index.md) / useSize
Returns the size of the element found by provided query.

## References
* [Hooks](../index.md)
    * [useEffectOnce](../Once/useEffectOnce.md)

## [Module](../../../src/hooks/media/useSize.ts)
```ts
/**
 * Get the size information about provided element
 * @param query Query to get the element
 */
export function useSize(query: string): DOMRectReadOnly;
export default useSize;
```

## Example
```tsx
function TestComponent(props) {
    const containerSize = useSize("#container");

    return containerSize.width < 1000 ? (
        <p>View content on a larger screen.</p>
    ) : (
        <p>Here's the content you couldn't see before!</p>
    )

}
```