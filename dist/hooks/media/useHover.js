"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHover = void 0;
const react_1 = require("react");
const useEventListener_1 = __importDefault(require("../events/useEventListener"));
/**
 * Returns true if ref is being hovered over
 * @param ref Reference HTML element
 */
function useHover(ref) {
    var _a, _b;
    const [hovered, setHovered] = (0, react_1.useState)(false);
    (0, useEventListener_1.default)("mouseover", () => setHovered(true), (_a = ref.current) !== null && _a !== void 0 ? _a : undefined);
    (0, useEventListener_1.default)("mouseout", () => setHovered(false), (_b = ref.current) !== null && _b !== void 0 ? _b : undefined);
    return hovered;
}
exports.useHover = useHover;
exports.default = useHover;
