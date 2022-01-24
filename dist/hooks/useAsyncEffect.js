"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsyncEffectOnce = exports.useAsyncEffect = void 0;
const react_1 = require("react");
const useEffectOnce_1 = __importDefault(require("./wds/useEffectOnce"));
function useAsyncEffect(callback, dependencies) {
    return (0, react_1.useEffect)(() => { callback(); }, dependencies);
}
exports.useAsyncEffect = useAsyncEffect;
function useAsyncEffectOnce(callback) {
    return (0, useEffectOnce_1.default)(() => { callback(); });
}
exports.useAsyncEffectOnce = useAsyncEffectOnce;
