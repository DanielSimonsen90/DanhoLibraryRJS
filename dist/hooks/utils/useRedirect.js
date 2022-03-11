"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRedirect = void 0;
/**
 * Redirect client to url
 * @returns Function to redirect client to new provided url
 */
function useRedirect() {
    return (to) => (window.location.href = typeof to === 'function' ?
        to(window.location.origin.substring(0)) :
        `${window.location.origin}/${to}`);
}
exports.useRedirect = useRedirect;
exports.default = useRedirect;
