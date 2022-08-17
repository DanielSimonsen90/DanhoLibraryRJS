import { useState, useCallback, Dispatch } from "react"

type ValidationCallback<T> = (value: T) => boolean;
type useStateWithValidationReturn<T> = [state: T, onChange: Dispatch<T>, isValid: boolean];

/**
 * useState but it validates if value is valid using validationFunc
 * @param validationFunc Validation predicate
 * @param initialValue Value to validate
 */
export function useStateWithValidation<T>(validationFunc: ValidationCallback<T>, initialValue: T): useStateWithValidationReturn<T> {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(() => validationFunc(state));

  const onChange = useCallback((nextState: T) => {
      const value = typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFunc(value));
    }, [validationFunc]);

  return [state, onChange, isValid];
}
export default useStateWithValidation;