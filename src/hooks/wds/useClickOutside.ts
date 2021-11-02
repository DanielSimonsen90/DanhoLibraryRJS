import { Dispatch, RefObject } from "react"
import useEventListener from "./useEventListener"

/**
 * Client clicked outside of reference element - very cool for modals
 * @param ref Element to reference
 * @param cb Click event, if clicked outside
 */
export default function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, cb: Dispatch<MouseEvent>) { 
    useEventListener("click", e => { 
        if (ref.current == null || ref.current.contains(e.target as Node)) return
        cb(e)
    }, document);
}