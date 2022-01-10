import React, { RefObject, useEffect, useState } from "react"

/**
 * Element reference is rootMargin visible - return true if element is 8px visible on the screen
 * @param ref Element reference
 * @param rootMargin Allowed margin until element is visible
 * @returns Reference element's visibility
 */
export function useOnScreen<T extends HTMLElement>(ref: RefObject<T> | T | string, rootMargin = "0px") { 
    const [isVisible, setIsVisible] = useState(false);
    const [el, setEl] = useState<T | null>(null);

    useEffect(() => {
        setEl(() => {
            if (!ref) return null;
            if ((ref as RefObject<T>).current) return (ref as RefObject<T>).current;
            else if (typeof ref === 'string') return document.querySelector(ref) as T;
            else return ref as T;
        })
    }, [ref])

    useEffect(() => {
        if (el == null) return
        const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { rootMargin });
        observer.observe(el);

        return () => {
            if (el == null) return;
            observer.unobserve(el);
        }
    }, [el, rootMargin]);

    return isVisible;
}
export default useOnScreen;