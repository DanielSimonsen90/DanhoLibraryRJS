import { Dispatch } from "react";
type ValidationCallback<T> = (value: T) => boolean;
type useStateWithValidationReturn<T> = [state: T, onChange: Dispatch<T>, isValid: boolean];
/**
 * useState but it validates if value is valid using validator
 * @param validator Validation predicate
 * @param initialValue Value to validate
 */
export declare function useStateWithValidation<State>(validator: ValidationCallback<State>, initialValue: State): useStateWithValidationReturn<State>;
export default useStateWithValidation;
