"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateOnUpdate = void 0;
const react_1 = require("react");
function useStateOnUpdate(initialState, onDependencyUpdate, dependencies) {
    const [state, setState] = (0, react_1.useState)(initialState);
    (0, react_1.useEffect)(() => {
        setState(onDependencyUpdate(state));
    }, dependencies);
    return state;
}
exports.useStateOnUpdate = useStateOnUpdate;
exports.default = useStateOnUpdate;
