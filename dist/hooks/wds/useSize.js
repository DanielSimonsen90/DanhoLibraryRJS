"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSize = void 0;
const react_1 = require("react");
const useEffectOnce_1 = __importDefault(require("./useEffectOnce"));
/**
 * Get the size information about provided element
 * @param ref Element to reference
 */
function useSize(ref) {
    const [size, setSize] = (0, react_1.useState)({});
    (0, useEffectOnce_1.default)(() => {
        if (!ref.current)
            return;
        const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));
        observer.observe(ref.current);
        return () => observer.disconnect();
    });
    return size;
}
exports.useSize = useSize;
exports.default = useSize;
