import { useCallback, useMemo, useRef, useState } from "react"
type ValueChangeFunc<T> = (value: T) => T

/**
 * Toggle between specific values
 * @param defaultValue default/initial value for the toggle
 * @param onSetTrue Callback when value is ture
 * @param onSetFalse Callback when value is false
 * @returns [value: T, toggleValue: (newValue?: T) => T, isToggled: boolean]
 */
export default function useToggle<T = boolean>(defaultValue: T, onSetTrue: ValueChangeFunc<T>, onSetFalse: ValueChangeFunc<T>) {
  const [value, setValue] = useState(defaultValue);
  const [setTrue, setFalse] = [useRef(onSetTrue), useRef(onSetFalse)];
  const getIsToggled = useCallback(() => setTrue.current(value) == value, [value])
  const isToggled = useMemo(getIsToggled, [value]);

  function toggleValue(newValue?: T) {
    const isTrue = getIsToggled();
    return setValue(isTrue ? 
        (newValue ? setFalse.current(newValue) : setFalse.current(value)) :
        (newValue ? setTrue.current(newValue) : setTrue.current(value))
    );
  }

  return [value, toggleValue, isToggled];
}