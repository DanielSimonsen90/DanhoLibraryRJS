declare type ValueChangeFunc<T> = (value: T) => T;
/**
 * Toggle between specific values
 * @param defaultValue default/initial value for the toggle
 * @param onSetTrue Callback when value is ture
 * @param onSetFalse Callback when value is false
 * @returns [value: T, toggleValue: (newValue?: T) => T, isToggled: boolean]
 */
export declare function useToggle<T = boolean>(defaultValue: T, onSetTrue: ValueChangeFunc<T>, onSetFalse: ValueChangeFunc<T>): (boolean | T | ((newValue?: T | undefined) => void))[];
export default useToggle;
