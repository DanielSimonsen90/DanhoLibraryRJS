"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateOnChange = void 0;
const react_1 = require("react");
const useDebounce_1 = __importDefault(require("../effect/useDebounce"));
/**
 * useState but only change after not being interrupted for timeout
 * @param initialState Initial/Default state
 * @param timeout Timeout until state can change
 * @returns [state after timeout, changable state, onChange/setState]
 */
function useStateOnChange(initialState, timeout) {
    const [state, setState] = (0, react_1.useState)(initialState);
    const [stateChange, setStateChange] = (0, react_1.useState)(initialState);
    (0, useDebounce_1.default)(() => setState(stateChange), timeout, [state, timeout]);
    return [state, stateChange, setStateChange];
}
exports.useStateOnChange = useStateOnChange;
exports.default = useStateOnChange;
