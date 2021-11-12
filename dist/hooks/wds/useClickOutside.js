"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickOutside = void 0;
const useEventListener_1 = __importDefault(require("./useEventListener"));
/**
 * Client clicked outside of reference element - very cool for modals
 * @param ref Element to reference
 * @param cb Click event, if clicked outside
 */
function useClickOutside(ref, cb) {
    (0, useEventListener_1.default)("click", e => {
        if (ref.current == null || ref.current.contains(e.target))
            return;
        cb(e);
    }, document);
}
exports.useClickOutside = useClickOutside;
exports.default = useClickOutside;
