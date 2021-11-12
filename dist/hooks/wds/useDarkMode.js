"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDarkMode = void 0;
const react_1 = require("react");
const useMediaQuery_1 = __importDefault(require("./useMediaQuery"));
const useStorage_1 = require("./useStorage");
/**
 * Client prefers darkmode or not - toggles between "dark-mode" css class
 */
function useDarkMode() {
    const [darkMode, setDarkMode] = (0, useStorage_1.useLocalStorage)("useDarkMode", false);
    const prefersDarkMode = (0, useMediaQuery_1.default)("(prefers-color-scheme: dark)");
    const enabled = darkMode ?? prefersDarkMode;
    (0, react_1.useEffect)(() => {
        document.body.classList.toggle("dark-mode", enabled);
    }, [enabled]);
    return [enabled, setDarkMode];
}
exports.useDarkMode = useDarkMode;
exports.default = useDarkMode;
