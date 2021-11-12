"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrevious = void 0;
const react_1 = require("react");
/**
 * useState but it stores the previous value of the state
 * @param value Current state value
 * @returns Previous state value
 */
function usePrevious(value) {
    const currentRef = (0, react_1.useRef)(value);
    const previousRef = (0, react_1.useRef)();
    if (currentRef.current !== value) {
        previousRef.current = currentRef.current;
        currentRef.current = value;
    }
    return previousRef.current;
}
exports.usePrevious = usePrevious;
exports.default = usePrevious;
