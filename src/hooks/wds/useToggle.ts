import { useCallback, useMemo, useRef, useState } from "react"
type ValueChangeFunc<T> = (value: T) => T
type UseToggleReturn<T> = [value: T, toggleValue: (newValue?: T) => void, isToggled: boolean]

/**
 * Toggle between specific values
 * @param defaultValue default/initial value for the toggle
 * @param onSetTrue Callback when value is ture
 * @param onSetFalse Callback when value is false
 * @returns [value: T, toggleValue: (newValue?: T) => T, isToggled: boolean]
 */
export function useToggle<T>(defaultValue: T, toggledValue: T, onSetTrue?: ValueChangeFunc<T>, onSetFalse?: ValueChangeFunc<T>): UseToggleReturn<T> {
  const [value, setValue] = useState(defaultValue);
  const [onToggledTrue, onToggledFalse] = [
    useRef<ValueChangeFunc<T>>(onSetTrue || ((v) => v)), 
    useRef<ValueChangeFunc<T>>(onSetFalse || ((v) => v))
  ];
  const isToggled = useMemo(() => value === toggledValue, [value]);

  const toggleValue = useCallback((newValue?: T) => setValue(() => {
    let v: T;

    if (isToggled) {
      v = newValue ?? defaultValue;
      v === defaultValue ? onToggledFalse.current(v) : onToggledTrue.current(v);
    }
    else {
      v = newValue ?? toggledValue;
      v === defaultValue ? onToggledTrue.current(v) : onToggledFalse.current(v);
    }

    return v;
  }), [value])

  return [value, toggleValue, isToggled];
}

export default useToggle;