import { useCallback, useMemo, useRef, useState } from "react";
type ValueChangeFunc<T> = (value: T) => T;
type ValueChanged<T> = (value: T) => void;
type UseToggleReturn<T> = [value: T, toggleValue: (newValue?: T) => void, isToggled: boolean];
type ToggleChanges<T> = {
  onDefault: ValueChangeFunc<T>,
  onChange: ValueChanged<T>,
  onToggled: ValueChangeFunc<T>,
};

/**
 * Toggles between defaultValue & toggledValue.
 * @param defaultValue The default value of the toggle
 * @param toggledValue The value of the toggle when toggled
 * @param changes Change callbacks if needed for when a toggle has occured.
 * @returns [value: T, toggleValue: (value?: T) => void, isToggled: boolean]
 */
export function useToggle<T>(defaultValue: T, toggledValue: T, { onDefault, onToggled, onChange }: ToggleChanges<T> = {
  onDefault: (value: T) => value,
  onChange: (value: T) => { },
  onToggled: (value: T) => value,
}): UseToggleReturn<T> {
  const [value, setValue] = useState(defaultValue);
  const [onToggledTrue, onToggledFalse, onToggleChanged] = [
    useRef<ValueChangeFunc<T>>(onToggled),
    useRef<ValueChangeFunc<T>>(onDefault),
    useRef<ValueChanged<T>>(onChange),
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
    onChange(v);

    return v;
  }), [value]);

  return [value, toggleValue, isToggled];
}

export default useToggle;