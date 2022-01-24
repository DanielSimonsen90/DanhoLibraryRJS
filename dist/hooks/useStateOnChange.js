"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateOnChange = void 0;
const danholibraryjs_1 = require("danholibraryjs");
const react_1 = require("react");
/**
 * useState but only change after not being interrupted for timeout
 * @param initialState Initial/Default state
 * @param timeout Timeout until state can change
 * @returns [state after timeout, changable state, onChange/setState]
 */
function useStateOnChange(initialState, timeout) {
    const [state, setState] = (0, react_1.useState)(initialState);
    const [stateChange, setStateChange] = (0, react_1.useState)(initialState);
    let timeouter = setTimeout(() => { }, 1);
    const commitChange = () => setState(stateChange);
    (0, react_1.useEffect)(() => {
        timeouter = setTimeout(() => { commitChange(); }, (0, danholibraryjs_1.ms)(timeout));
        return () => clearTimeout(timeouter);
    }, [stateChange]);
    return [state, stateChange, setStateChange];
}
exports.useStateOnChange = useStateOnChange;
exports.default = useStateOnChange;
