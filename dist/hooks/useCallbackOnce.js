"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCallbackOnce = void 0;
const react_1 = require("react");
/**
 * useCallback but it only runs once
 * @param callback Callback to run once
 */
const useCallbackOnce = (callback) => (0, react_1.useCallback)(callback, []);
exports.useCallbackOnce = useCallbackOnce;
exports.default = exports.useCallbackOnce;
