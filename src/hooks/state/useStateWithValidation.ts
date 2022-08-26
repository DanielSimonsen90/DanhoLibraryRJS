import { useState, useCallback, Dispatch } from "react"

type ValidationCallback<T> = (value: T) => boolean;
type useStateWithValidationReturn<T> = [state: T, onChange: Dispatch<T>, isValid: boolean];

/**
 * useState but it validates if value is valid using validator
 * @param validator Validation predicate
 * @param initialValue Value to validate
 */
export function useStateWithValidation<State>(validator: ValidationCallback<State>, initialValue: State): useStateWithValidationReturn<State> {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(() => validator(state));

  const onChange = useCallback((nextState: State) => {
      const value = typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setIsValid(validator(value));
    }, [validator]);

  return [state, onChange, isValid];
}
export default useStateWithValidation;