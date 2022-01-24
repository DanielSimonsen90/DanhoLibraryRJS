"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRedirect = void 0;
/**
 * Redirects client to new url
 * @param to New url
 */
function useRedirect() {
    return (to) => {
        window.location.pathname = typeof to === 'function' ? to(window.location.pathname) : to;
    };
}
exports.useRedirect = useRedirect;
exports.default = useRedirect;
