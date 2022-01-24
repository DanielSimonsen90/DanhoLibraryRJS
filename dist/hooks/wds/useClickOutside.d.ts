import { RefObject } from "react";
/**
 * Client clicked outside of reference element - very cool for modals
 * @param query Query to get element
 * @param onClickOutside Click event, if clicked outside
 */
export declare function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, onClickOutside: (event: MouseEvent) => void): {
    addEventListener: () => void;
    removeEventListener: () => void;
};
export default useClickOutside;
