"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTimeout = void 0;
const react_1 = require("react");
const danholibraryjs_1 = require("danholibraryjs");
const once_1 = require("../once");
/**
 * Smarter version of setTimeout - provides clear() & reset() functions and doesn't get messed up due to re-renders
 * @param callback Callback to run, once timeout is done
 * @param delay Timeout delay - smart-string or millisecond value
 * @returns Object containing reset & clear methods
 */
function useTimeout(callback, delay) {
    const callbackRef = (0, react_1.useRef)(callback);
    const timeoutRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => { callbackRef.current = callback; }, [callback]);
    const set = (0, react_1.useCallback)(() => { timeoutRef.current = setTimeout(() => callbackRef.current(), (0, danholibraryjs_1.ms)(delay)); }, [delay]);
    const clear = (0, once_1.useCallbackOnce)(() => { timeoutRef.current && clearTimeout(timeoutRef.current); });
    (0, react_1.useEffect)(() => {
        set();
        return clear;
    }, [delay, set, clear]);
    const reset = (0, react_1.useCallback)(() => {
        clear();
        set();
    }, [clear, set]);
    return { reset, clear };
}
exports.useTimeout = useTimeout;
exports.default = useTimeout;
