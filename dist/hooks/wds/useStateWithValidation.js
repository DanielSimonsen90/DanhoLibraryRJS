"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateWithValidation = void 0;
const react_1 = require("react");
/**
 * useState but it validates if value is valid using validationFunc
 * @param validationFunc Validation predicate
 * @param initialValue Value to validate
 */
function useStateWithValidation(validationFunc, initialValue) {
    const [state, setState] = (0, react_1.useState)(initialValue);
    const [isValid, setIsValid] = (0, react_1.useState)(() => validationFunc(state));
    const onChange = (0, react_1.useCallback)(nextState => {
        const value = typeof nextState === "function" ? nextState(state) : nextState;
        setState(value);
        setIsValid(validationFunc(value));
    }, [validationFunc]);
    return [state, onChange, isValid];
}
exports.useStateWithValidation = useStateWithValidation;
exports.default = useStateWithValidation;
