"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffectOnce = void 0;
const react_1 = require("react");
/**
 * useEffect but it only runs once
 * @param effect Effect-callback to run once
 */
const useEffectOnce = (effect) => (0, react_1.useEffect)(effect, []);
exports.useEffectOnce = useEffectOnce;
exports.default = exports.useEffectOnce;
