"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebounce = void 0;
const react_1 = require("react");
const useTimeout_1 = __importDefault(require("./useTimeout"));
const useEffectOnce_1 = __importDefault(require("./useEffectOnce"));
/**
 * Runs callback after delay time. Resets on dependency change
 * @param callback Callback to run
 * @param delay Time until callback should run
 * @param dependencies Run timeout again if dependencies changed
 */
function useDebounce(callback, delay, dependencies) {
    const { reset, clear } = (0, useTimeout_1.default)(callback, delay);
    (0, react_1.useEffect)(reset, [...dependencies, reset]);
    (0, useEffectOnce_1.default)(clear);
}
exports.useDebounce = useDebounce;
exports.default = useDebounce;
