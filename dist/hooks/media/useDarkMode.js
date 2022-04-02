"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDarkMode = void 0;
const react_1 = require("react");
const useMediaQuery_1 = __importDefault(require("./useMediaQuery"));
const useStorage_1 = require("../state/useStorage");
/**
 * Client prefers darkmode or not - toggles between "dark-mode" css class
 */
function useDarkMode() {
    const prefersDarkMode = (0, useMediaQuery_1.default)("(prefers-color-scheme: dark)");
    const [settings, setSettings] = (0, useStorage_1.useLocalStorage)("settings", { darkmode: prefersDarkMode });
    const setDarkMode = (0, react_1.useCallback)((value) => setSettings(s => ({ ...s,
        darkmode: typeof value === 'function' ? value(s.darkmode) : value
    })), [setSettings]);
    return [settings.darkmode, setDarkMode];
}
exports.useDarkMode = useDarkMode;
exports.default = useDarkMode;
