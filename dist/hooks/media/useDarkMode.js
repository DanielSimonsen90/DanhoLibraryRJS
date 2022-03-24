"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDarkMode = void 0;
const useMediaQuery_1 = __importDefault(require("./useMediaQuery"));
const useStorage_1 = require("../state/useStorage");
/**
 * Client prefers darkmode or not - toggles between "dark-mode" css class
 */
function useDarkMode() {
    const [darkMode, setDarkMode] = (0, useStorage_1.useLocalStorage)("useDarkMode", true);
    const prefersDarkMode = (0, useMediaQuery_1.default)("(prefers-color-scheme: dark)");
    const enabled = darkMode !== null && darkMode !== void 0 ? darkMode : prefersDarkMode;
    return [enabled, setDarkMode];
}
exports.useDarkMode = useDarkMode;
exports.default = useDarkMode;
