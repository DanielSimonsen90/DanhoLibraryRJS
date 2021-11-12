"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHover = void 0;
const react_1 = require("react");
const useEventListener_1 = __importDefault(require("./useEventListener"));
/**
 * Returns true if ref is being hovered over
 * @param ref Reference HTML element
 */
function useHover(ref) {
    const [hovered, setHovered] = (0, react_1.useState)(false);
    if (!ref.current)
        throw Error("No reference element!");
    (0, useEventListener_1.default)("mouseover", () => setHovered(true), ref.current);
    (0, useEventListener_1.default)("mouseout", () => setHovered(false), ref.current);
    return hovered;
}
exports.useHover = useHover;
exports.default = useHover;
