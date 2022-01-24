"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventListener = void 0;
const react_1 = require("react");
/**
 * Add event listener to element
 * @param eventType Type of event to add a listener to
 * @param callback Listener callback
 * @param element Element to append listener to. Default is window
 */
function useEventListener(eventType, callback, element) {
    element !== null && element !== void 0 ? element : window;
    const callbackRef = (0, react_1.useRef)(callback);
    const handler = (e, element) => callbackRef.current(e, element);
    (0, react_1.useEffect)(() => {
        callbackRef.current = callback;
    }, [callback]);
    const addEventListener = () => {
        const target = element;
        target.addEventListener(eventType, e => handler(e, target));
    };
    const removeEventListener = () => {
        const target = element;
        target.removeEventListener(eventType, e => handler(e, target));
    };
    (0, react_1.useEffect)(() => {
        if (element == null)
            return;
        addEventListener();
        return () => removeEventListener();
    }, [eventType, element]);
    return { addEventListener, removeEventListener };
}
exports.useEventListener = useEventListener;
exports.default = useEventListener;
