"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickOutside = void 0;
const useEventListener_1 = __importDefault(require("./useEventListener"));
function includesChild(parent, target) {
    if (!target)
        return true;
    if (parent.hasChildNodes() && [...parent.childNodes.values()].some(child => includesChild(child, target)))
        return true;
    return parent.contains(target);
}
/**
 * Client clicked outside of reference element - very cool for modals
 * @param query Query to get element
 * @param onClickOutside Click event, if clicked outside
 */
function useClickOutside(query, onClickOutside) {
    return (0, useEventListener_1.default)("click", e => {
        const el = document.querySelector(query);
        if (el == null || includesChild(el, e.target))
            return;
        onClickOutside(e, el);
    }, document);
}
exports.useClickOutside = useClickOutside;
exports.default = useClickOutside;
