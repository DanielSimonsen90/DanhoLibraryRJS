"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowSize = void 0;
const react_1 = require("react");
const useEventListener_1 = __importDefault(require("./useEventListener"));
/**
 * Information about the current window size
 * @returns Dimensions of the current window
 */
function useWindowSize() {
    const [windowSize, setWindowSize] = (0, react_1.useState)({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    (0, useEventListener_1.default)("resize", () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });
    return windowSize;
}
exports.useWindowSize = useWindowSize;
exports.default = useWindowSize;
