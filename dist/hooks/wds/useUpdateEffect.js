"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateEffect = void 0;
const react_1 = require("react");
/**
 * useEffect, but it doesn't run on first render
 * @param callback Callback to run when dependencies update
 * @param dependencies Dependencies
 */
function useUpdateEffect(callback, dependencies) {
    const firstRenderRef = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
    }, dependencies);
}
exports.useUpdateEffect = useUpdateEffect;
exports.default = useUpdateEffect;
