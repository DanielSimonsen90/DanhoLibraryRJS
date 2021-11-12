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
    element ?? window;
    const callbackRef = (0, react_1.useRef)(callback);
    (0, react_1.useEffect)(() => {
        callbackRef.current = callback;
    }, [callback]);
    (0, react_1.useEffect)(() => {
        if (element == null)
            return;
        const handler = (e, element) => callbackRef.current(e, element);
        element.addEventListener(eventType, e => handler(e, element));
        return () => element.removeEventListener(eventType, e => handler(e, element));
    }, [eventType, element]);
}
exports.useEventListener = useEventListener;
exports.default = useEventListener;
