declare type ValueChangeFunc<T> = (value: T) => T;
declare type ValueChanged<T> = (value: T) => void;
declare type UseToggleReturn<T> = [value: T, toggleValue: (newValue?: T) => void, isToggled: boolean];
declare type ToggleChanges<T> = {
    onDefault: ValueChangeFunc<T>;
    onChange: ValueChanged<T>;
    onToggled: ValueChangeFunc<T>;
};
/**
 * Toggles between defaultValue & toggledValue.
 * @param defaultValue The default value of the toggle
 * @param toggledValue The value of the toggle when toggled
 * @param changes Change callbacks if needed for when a toggle has occured.
 * @returns [value: T, toggleValue: (value?: T) => void, isToggled: boolean]
 */
export declare function useToggle<T>(defaultValue: T, toggledValue: T, { onDefault, onToggled, onChange }?: ToggleChanges<T>): UseToggleReturn<T>;
export default useToggle;
