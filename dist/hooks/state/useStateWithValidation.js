"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateWithValidation = void 0;
const react_1 = require("react");
/**
 * useState but it validates if value is valid using validator
 * @param validator Validation predicate
 * @param initialValue Value to validate
 */
function useStateWithValidation(validator, initialValue) {
    const [state, setState] = (0, react_1.useState)(initialValue);
    const [isValid, setIsValid] = (0, react_1.useState)(() => validator(state));
    const onChange = (0, react_1.useCallback)((nextState) => {
        const value = typeof nextState === "function" ? nextState(state) : nextState;
        setState(value);
        setIsValid(validator(value));
    }, [validator]);
    return [state, onChange, isValid];
}
exports.useStateWithValidation = useStateWithValidation;
exports.default = useStateWithValidation;
