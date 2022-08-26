# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Media](index.md) / useHover
Returns boolean value of when ref element is hovered.

## References
* [Hooks](../index.md)
    * [useEventListener](../Events/useEventListener.md)

## [Module](../../../src/hooks/media/useHover.ts)
```ts
/**
 * Returns true if ref is being hovered over
 * @param ref Reference HTML element
 */
export function useHover<T extends HTMLElement>(ref: RefObject<T>): boolean
export default useHover;
```

## Example
```tsx
function Navbar(props) {
    // useMemo but it only runs once
    const routes = useMemoOnce(() => [
        '/', 'Home',
        '/about', 'About',
        '/privacy', 'Privacy Policy'
    ]);
    const navRef = useRef();
    const hovered = useHover(navRef);

    return (
        <ul ref={navRef}>
            {routes.map(([route, title]) => (
                <li>
                    <a href={route}>{title}</a>
                </li>
            ))}
        </ul>
    )
}
```