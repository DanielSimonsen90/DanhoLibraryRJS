"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateUpdate = void 0;
const react_1 = require("react");
const effect_1 = require("../effect");
function useStateUpdate(initialState, { before, after } = {
    before: s => s,
    after: () => { }
}, dependencies) {
    const [state, setState] = (0, react_1.useState)(initialState);
    (0, effect_1.useDeepCompareEffect)(() => {
        setState(before(state));
    }, dependencies);
    (0, effect_1.useDeepCompareEffect)(() => after(state), [state]);
    return state;
}
exports.useStateUpdate = useStateUpdate;
exports.default = useStateUpdate;
