declare type ValueChangeFunc<T> = (value: T) => T;
declare type UseToggleReturn<T> = [value: T, toggleValue: (newValue?: T) => void, isToggled: boolean];
/**
 * Toggle between specific values
 * @param defaultValue default/initial value for the toggle
 * @param onSetTrue Callback when value is ture
 * @param onSetFalse Callback when value is false
 * @returns [value: T, toggleValue: (newValue?: T) => T, isToggled: boolean]
 */
export declare function useToggle<T>(defaultValue: T, toggledValue: T, onSetTrue?: ValueChangeFunc<T>, onSetFalse?: ValueChangeFunc<T>): UseToggleReturn<T>;
export default useToggle;
