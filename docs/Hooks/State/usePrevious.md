# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [State](index.md) / usePrevious
usestate but it stores the previous value of the state

## [Module](../../../src/hooks/state/usePrevious.ts)
```ts
/**
 * useState but it stores the previous value of the state
 * @param value Current state value
 * @returns Previous state value
 */
export function usePrevious<T>(value: T): T;
export default usePrevious;
```

## Example
```tsx
function TestComponent(props) {
    const [value, setValue] = useState("");
    const previous = usePrevious(value);
    const [didUndo, setDidUndo] = useState(false);
    const [didRedo, setDidRedo] = useState(false);

    /*
    Probably better to use useStateWithHistory for this if you want to provide a better undo/redo system, but I can't come up with a better example xD
    */

    return (
        <form onSubmit={props.onSubmit(value)}>
            <input type="text" value={value} onChange={e => {
                setValue(e.target.value);
                // You can only use the previous value, so if that value changes, you can't redo that action - only undo.
                setDidUndo(false);
                setDidRedo(true);
            }}>
            <div className="button-container">
                <button disabled={didUndo} onClick={() => {
                    setDidUndo(true);
                    setDidRedo(false);
                    setValue(previous);
                }}>Undo</button>
                <button disabled={didRedo} onClick={() => {
                    setDidRedo(true);
                    setDidUndo(false);
                    setValue(previous);
                }}>Redo</button>
            </div>
        </form>
    )
}
```