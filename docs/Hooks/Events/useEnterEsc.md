# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Events](index.md) / useEnterEsc
Hook that listens for Enter/NumpadEnter or Escape keypress. Can be bound to other elements than document. Useful for modals.

## [Module](../../../src/hooks/events/useEnterEsc.ts)
```ts
type Props = {
    onEnter?: Callback
    onEsc?: Callback
    target?: EventTarget
}

export function useEnterEsc(props: Props): void;
export default useEnterEsc;
```

## Example
```tsx
function TestModal({ onSubmit, onCancel }) {
    // Listen for Enter/Esc keyboard actions, instead of clicking provided buttons
    useEnterEsc({
        onEnter: onSubmit,
        onEsc: onCancel
    });

    return (
        <div role="dialog">
            <h1>Are you sure you want to proceed with this action?</h1>
            <div className='button-container'>
                <Button importance="secondary" crud="delete" onClick={onCancel}>No</Button>
                <Button importance="primary" crud="create" onClick={onSubmit}>Yes</Button>
            </div>
        </div>
    )
}
```