"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThrottle = void 0;
const react_1 = require("react");
function useThrottle(callback, timeout) {
    const [throttled, setThrottled] = (0, react_1.useState)(false);
    const throttledCallback = (0, react_1.useCallback)((...args) => {
        if (!throttled) {
            callback(...args);
            setThrottled(true);
            setTimeout(() => setThrottled(false), timeout);
        }
    }, [callback, timeout, throttled]);
    return throttledCallback;
}
exports.useThrottle = useThrottle;
