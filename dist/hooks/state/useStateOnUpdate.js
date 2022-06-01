"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateOnUpdate = void 0;
const react_1 = require("react");
const effect_1 = require("../effect");
function useStateOnUpdate(initialState, onDependencyUpdate, dependencies) {
    const [state, setState] = (0, react_1.useState)(initialState);
    (0, effect_1.useDeepCompareEffect)(() => {
        setState(onDependencyUpdate(state));
    }, dependencies);
    return state;
}
exports.useStateOnUpdate = useStateOnUpdate;
exports.default = useStateOnUpdate;
