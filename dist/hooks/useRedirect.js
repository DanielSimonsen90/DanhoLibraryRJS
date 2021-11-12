"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRedirect = void 0;
/**
 * Redirects client to new url
 * @param to New url
 */
function useRedirect(to) {
    return window.location.pathname = to;
}
exports.useRedirect = useRedirect;
exports.default = useRedirect;
