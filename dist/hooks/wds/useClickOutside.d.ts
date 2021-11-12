import { Dispatch, RefObject } from "react";
/**
 * Client clicked outside of reference element - very cool for modals
 * @param ref Element to reference
 * @param cb Click event, if clicked outside
 */
export declare function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, cb: Dispatch<MouseEvent>): void;
export default useClickOutside;
