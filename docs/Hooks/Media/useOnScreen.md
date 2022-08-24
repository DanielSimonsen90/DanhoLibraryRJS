# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Media](index.md) / useOnScreen
Returns boolean value, if provided ref is provided margin off the screen.

## [Module](../../../src/hooks/media/useOnScreen.ts)
```ts
/**
 * Element reference is rootMargin visible - return true if element is 8px visible on the screen
 * @param ref Element reference
 * @param rootMargin Allowed margin until element is visible
 * @returns Reference element's visibility
 */
export function useOnScreen<T extends HTMLElement>(ref: RefObject<T> | T | string, rootMargin = "0px"): boolean;
export default useOnScreen;
```

## Example
```tsx
function TestComponent(props) {
    const articleRef = useRef();
    const isVisible = useOnScreen(articleRef, "5vh");

    return (
        <article ref={articleRef} className={isVisible ? 'fade-in' : 'hidden'}>
            <h1>Crazy news story</h1>
            <p>I faded in when you saw me!</p>
        </article>
    )
}
```