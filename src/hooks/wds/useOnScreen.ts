import React, { RefObject, useEffect, useState } from "react"

/**
 * Element reference is rootMargin visible - return true if element is 8px visible on the screen
 * @param ref Element reference
 * @param rootMargin Allowed margin until element is visible
 * @returns Reference element's visibility
 */
export default function useOnScreen<T extends HTMLElement>(ref: RefObject<T>, rootMargin = "0px") { 
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (ref.current == null) return
        const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { rootMargin });
        observer.observe(ref.current);

        return () => {
            if (ref.current == null) return;
            observer.unobserve(ref.current);
        }
    }, [ref.current, rootMargin]);

    return isVisible;
}