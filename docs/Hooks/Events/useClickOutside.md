# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Events](./index.md) / useClickOutside
Client clicked outside of reference element - very cool for modals

## References
* Hooks
    * [useEventListener](./useEventListener.md)

## [Module](../../../src/hooks/events/useClickOutside.ts)
```ts
export function useClickOutside(query: string, onClickOutside: (event: MouseEvent, element: HTMLElement)): {
    addEventListener(): void;
    removeEventListener(): void;
}
export default useClickOutside;
```

## Example
```tsx
function TestComponent(props) {
    const [showModal, setShowModal] = useState(false);
    
    useClickOutside("#modal", (e, el) => {
        el.classList.add("fade");

        // like setTimeout - takes a callback and needs a timeout value.
        useTimeout(() => setShowModal(false), 1000);
    });
}
```