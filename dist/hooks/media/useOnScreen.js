"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnScreen = void 0;
const react_1 = require("react");
/**
 * Element reference is rootMargin visible - return true if element is 8px visible on the screen
 * @param ref Element reference
 * @param rootMargin Allowed margin until element is visible
 * @returns Reference element's visibility
 */
function useOnScreen(ref, rootMargin = "0px") {
    const [isVisible, setIsVisible] = (0, react_1.useState)(false);
    const [el, setEl] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        setEl(() => {
            if (!ref)
                return null;
            if (ref.current)
                return ref.current;
            else if (typeof ref === 'string')
                return document.querySelector(ref);
            else
                return ref;
        });
    }, [ref]);
    (0, react_1.useEffect)(() => {
        if (el == null)
            return;
        const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { rootMargin });
        observer.observe(el);
        return () => {
            if (el == null)
                return;
            observer.unobserve(el);
        };
    }, [el, rootMargin]);
    return isVisible;
}
exports.useOnScreen = useOnScreen;
exports.default = useOnScreen;
