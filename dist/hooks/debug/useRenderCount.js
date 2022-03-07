"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRenderCount = void 0;
const react_1 = require("react");
/**
 * Returns how many times the component has been re-rendered
 */
function useRenderCount() {
    const count = (0, react_1.useRef)(1);
    (0, react_1.useEffect)(() => { count.current++; });
    return count.current;
}
exports.useRenderCount = useRenderCount;
exports.default = useRenderCount;
