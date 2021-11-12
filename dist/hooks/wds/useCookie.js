"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCookie = void 0;
const react_1 = require("react");
const js_cookie_1 = __importDefault(require("js-cookie"));
/**
 * Easy way to manage cookies
 * @param name Name of the cookie
 * @param defaultValue Default value, if cookie wasn't found
 */
function useCookie(name, defaultValue) {
    const [value, setValue] = (0, react_1.useState)(() => {
        const cookie = js_cookie_1.default.get(name);
        if (cookie)
            return cookie;
        js_cookie_1.default.set(name, defaultValue);
        return defaultValue;
    });
    const updateCookie = (0, react_1.useCallback)((newValue, options) => {
        js_cookie_1.default.set(name, newValue, options);
        setValue(newValue);
    }, [name]);
    const deleteCookie = (0, react_1.useCallback)(() => {
        js_cookie_1.default.remove(name);
        setValue(null);
    }, [name]);
    return [value, updateCookie, deleteCookie];
}
exports.useCookie = useCookie;
exports.default = useCookie;
