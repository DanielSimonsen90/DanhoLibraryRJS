"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSize = void 0;
const react_1 = require("react");
const useEffectOnce_1 = __importDefault(require("../once/useEffectOnce"));
/**
 * Get the size information about provided element
 * @param query Query to get the element
 */
function useSize(query) {
    const [size, setSize] = (0, react_1.useState)({});
    const el = (0, react_1.useMemo)(() => document.querySelector(query), [query]);
    (0, useEffectOnce_1.default)(() => {
        if (!el)
            return;
        const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));
        observer.observe(el);
        return () => observer.disconnect();
    });
    return size;
}
exports.useSize = useSize;
exports.default = useSize;
