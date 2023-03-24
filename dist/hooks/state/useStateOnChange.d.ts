import { Dispatch, SetStateAction } from "react";
import { TimeDelay } from "danholibraryjs";
/**
 * @param state The state that is debounced
 * @param stateChange The state that changes out of debounce - triggers debounce restart
 * @param setStateChange Setter for stateChange
*/
type UseStateOnChangeReturn<T> = [state: T, stateChange: T, setStateChange: Dispatch<SetStateAction<T>>];
/**
 * useState but only change after not being interrupted for timeout
 * @param initialState Initial/Default state
 * @param timeout Timeout until state can change
 * @returns [state after timeout, changable state, onChange/setState]
 */
export declare function useStateOnChange<T>(initialState: T, timeout: TimeDelay): UseStateOnChangeReturn<T>;
export default useStateOnChange;
