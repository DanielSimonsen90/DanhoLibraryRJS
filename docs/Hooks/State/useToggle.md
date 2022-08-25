# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [State](index.md) / useToggle
Toggles between initalState and toggledValue. onChange options available.

## [Module](../../../src/hooks/state/useToggle.ts)
```ts
type ValueChangeFunc<T> = (value: T) => T
type ValueChanged<T> = (value: T) => void
type UseToggleReturn<T> = [value: T, toggleValue: (newValue?: T) => void, isToggled: boolean]
type ToggleChanges<T> = {
  onDefault: ValueChangeFunc<T>,
  onChange: ValueChanged<T>,
  onToggled: ValueChangeFunc<T>,
}

/**
 * Toggles between defaultValue & toggledValue.
 * @param defaultValue The default value of the toggle
 * @param toggledValue The value of the toggle when toggled
 * @param changes Change callbacks if needed for when a toggle has occured.
 * @returns [value: T, toggleValue: (value?: T) => void, isToggled: boolean]
 */
export function useToggle<T>(defaultValue: T, toggledValue: T, { onDefault, onToggled, onChange }: ToggleChanges<T> = {
  onDefault: (value: T) => value,
  onChange: (value: T) => {},
  onToggled: (value: T) => value,
}): UseToggleReturn<T>;
export default useToggle;
```

## Example
```tsx
function ValueToggler(props) {
    const [value, toggle, isToggled] = useToggle("send", "receive", {
        onDefault: v => console.log(`Value is back to default`, v),
        onToggled: v => console.log(`Value is toggled`, v),
        onChange: v => console.log(`Value has changed`, v)
    });

    return (
        <>
            <p>The value is {value}, which is {isToggled ? 'its toggled value' : 'not its toggled value'}</p> 
            <div className="button-container">
                <button onClick={() => toggle(false)}>Set default</button>
                <button onClick={() => toggle()}>Toggle</button>
                <button onClick={() => toggle(true)}>Set toggled</button>
            </div>
        </>
    )
}
```