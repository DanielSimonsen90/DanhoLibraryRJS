import { RefObject } from "react";
import useEventListener from "./useEventListener"

/**
 * Client clicked outside of reference element - very cool for modals
 * @param query Query to get element
 * @param onClickOutside Click event, if clicked outside
 */
export function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, onClickOutside: (event: MouseEvent) => void) { 
    return useEventListener("click", e => { 
        if (ref.current == null || ref.current.contains(e.target as Node)) return
        onClickOutside(e)
    }, document);
}
export default useClickOutside;