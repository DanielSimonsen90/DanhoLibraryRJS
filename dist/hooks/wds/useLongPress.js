"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLongPress = void 0;
const useEventListener_1 = __importDefault(require("./useEventListener"));
const useTimeout_1 = __importDefault(require("./useTimeout"));
const useEffectOnce_1 = __importDefault(require("./useEffectOnce"));
const defaultOptions = {
    delay: 250
};
/**
 * Practically adds onLongPress event to reference element
 * @param ref Reference HTML element
 * @param onLongPress onLongPress callback
 * @param options Options
 */
function useLongPress(ref, onLongPress, { delay } = defaultOptions) {
    if (!ref.current)
        throw Error("No reference element!");
    const { reset, clear } = (0, useTimeout_1.default)(onLongPress, delay);
    (0, useEffectOnce_1.default)(clear);
    (0, useEventListener_1.default)("mousedown", reset, ref.current);
    (0, useEventListener_1.default)("touchstart", reset, ref.current);
    (0, useEventListener_1.default)("mouseup", clear, ref.current);
    (0, useEventListener_1.default)("mouseleave", clear, ref.current);
    (0, useEventListener_1.default)("touchend", clear, ref.current);
}
exports.useLongPress = useLongPress;
exports.default = useLongPress;
