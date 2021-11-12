import { RefObject } from "react";
/**
 * Element reference is rootMargin visible - return true if element is 8px visible on the screen
 * @param ref Element reference
 * @param rootMargin Allowed margin until element is visible
 * @returns Reference element's visibility
 */
export declare function useOnScreen<T extends HTMLElement>(ref: RefObject<T>, rootMargin?: string): boolean;
export default useOnScreen;
