import { ms, TimeDelay } from "danholibraryjs";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type UseStateOnChangeReturn<T> = [state: T, stateChange: T, setStateChange: Dispatch<SetStateAction<T>>]

/**
 * useState but only change after not being interrupted for timeout
 * @param initialState Initial/Default state
 * @param timeout Timeout until state can change
 * @returns [state after timeout, changable state, onChange/setState]
 */
export function useStateOnChange<T>(initialState: T, timeout: TimeDelay): UseStateOnChangeReturn<T> {
    const [state, setState] = useState(initialState);
    const [stateChange, setStateChange] = useState(initialState);
    let timeouter = setTimeout(() => {}, 1);

    const commitChange = () => setState(stateChange);

    useEffect(() => {
        timeouter = setTimeout(() => { commitChange() }, ms(timeout));
        return () => clearTimeout(timeouter);
    }, [stateChange]);

    return [state, stateChange, setStateChange];
}
export default useStateOnChange;