# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Once](./index.md) / useCallbackOnce
useCallback but with a dependency of [].

## [Module](../../../src/hooks/once/useCallbackOnce.ts)
```ts
/**
 * useCallback but it only runs once
 * @param callback Callback to run once
 */
export const useCallbackOnce = <T extends (...args: any[]) => void>(callback: T) => useCallback(callback, []);
export default useCallbackOnce;
```

## Example
```tsx
function TestComponent(props) {
    const alert = useCallbackOnce(message => confirm(`ALERT!\nAre you sure you want to ${message}?`));

    return (
        <article>
            <h1>{props.post.title}</h1>
            <p>{props.post.content}</p>
            <div className="button-container">
                <button onClick={() => props.onEditClick}>Edit</button>
                <button onClick={() => alert('delete this post') && props.onDeleteClick}>Delete</button>
            </div>
        </article>
    )
}
```