"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateEffect = exports.useDeepCompareEffect = void 0;
const react_1 = require("react");
const isEqual_1 = __importDefault(require("lodash/fp/isEqual"));
/**
 * useEffect but only runs when dependencies are changed (unrelated state may cause re-render, which can trigger classic useEffect - useDeepCompareEffect does not!)
 * @param callback Effect callback
 * @param dependencies Dependencies
 */
function useDeepCompareEffect(callback, dependencies) {
    const currentDependenciesRef = (0, react_1.useRef)();
    if (!(0, isEqual_1.default)(currentDependenciesRef.current, dependencies)) {
        currentDependenciesRef.current = dependencies;
    }
    (0, react_1.useEffect)(callback, [currentDependenciesRef.current]);
}
exports.useDeepCompareEffect = useDeepCompareEffect;
exports.useUpdateEffect = useDeepCompareEffect;
exports.default = useDeepCompareEffect;
