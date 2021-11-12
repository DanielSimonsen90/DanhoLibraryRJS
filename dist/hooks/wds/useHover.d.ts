import { RefObject } from "react";
/**
 * Returns true if ref is being hovered over
 * @param ref Reference HTML element
 */
export declare function useHover<T extends HTMLElement>(ref: RefObject<T>): boolean;
export default useHover;
