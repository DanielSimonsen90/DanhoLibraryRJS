"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMemoOnce = void 0;
const react_1 = require("react");
/**
 * useMemo but it only runs once
 * @param factory Memo-callback to run once
 */
const useMemoOnce = (factory) => (0, react_1.useMemo)(factory, []);
exports.useMemoOnce = useMemoOnce;
exports.default = exports.useMemoOnce;
