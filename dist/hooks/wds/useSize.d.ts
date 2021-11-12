import { RefObject } from "react";
/**
 * Get the size information about provided element
 * @param ref Element to reference
 */
export declare function useSize<T extends HTMLElement>(ref: RefObject<T>): DOMRectReadOnly;
export default useSize;
