import { Dispatch } from "react";
declare type ValidationCallback<T> = (value: T) => boolean;
declare type useStateWithValidationReturn<T> = [state: T, onChange: Dispatch<T>, isValid: boolean];
/**
 * useState but it validates if value is valid using validationFunc
 * @param validationFunc Validation predicate
 * @param initialValue Value to validate
 */
export declare function useStateWithValidation<T>(validationFunc: ValidationCallback<T>, initialValue: T): useStateWithValidationReturn<T>;
export default useStateWithValidation;
