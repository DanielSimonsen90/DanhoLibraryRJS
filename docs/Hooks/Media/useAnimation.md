# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Media](index.md) / useAnimation
Adds provided className to element matching provided query, and if baseTime provided, removes className after baseTime

## References
* [Hooks](../index.md)
    * [useStorage](../State/useStorage.md)
    * [useMediaQuery](./useMediaQuery.md)

## [Module](../../../src/hooks/media/useAnimation.ts)
```ts
/**
 * Adds className to element matching query, and if baseTime provided, removes className after baseTime
 * @param query Query to get element
 * @param className Class to add 
 * @param baseTime Base time to wait until className is removed. If left undefined, class will not be removed 
 */
export function useAnimation(query: string, className: string, baseTime?: TimeDelay): (additionalData?: AdditionalData) => Promise<HTMLElement>;
export default useAnimation;
```

## Example
```tsx
function ModalWrapper({ children, onClose }) {
    const animate = useAnimation(".modal", "animating", 500);

    // Play animation provided by the "animating" class, then once time has passed (500ms), call onClose
    const onCloseClicked = () => animate().then(onClose);        

    return (
        <div role="dialog" className="modal">
            <button onClick={onCloseClicked}>❌</button>
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}
```