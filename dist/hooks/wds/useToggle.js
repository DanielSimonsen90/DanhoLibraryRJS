"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggle = void 0;
const react_1 = require("react");
/**
 * Toggle between specific values
 * @param defaultValue default/initial value for the toggle
 * @param onSetTrue Callback when value is ture
 * @param onSetFalse Callback when value is false
 * @returns [value: T, toggleValue: (newValue?: T) => T, isToggled: boolean]
 */
function useToggle(defaultValue, onSetTrue, onSetFalse) {
    const [value, setValue] = (0, react_1.useState)(defaultValue);
    const [setTrue, setFalse] = [(0, react_1.useRef)(onSetTrue), (0, react_1.useRef)(onSetFalse)];
    const getIsToggled = (0, react_1.useCallback)(() => setTrue.current(value) == value, [value]);
    const isToggled = (0, react_1.useMemo)(getIsToggled, [value]);
    function toggleValue(newValue) {
        const isTrue = getIsToggled();
        return setValue(isTrue ?
            (newValue ? setFalse.current(newValue) : setFalse.current(value)) :
            (newValue ? setTrue.current(newValue) : setTrue.current(value)));
    }
    return [value, toggleValue, isToggled];
}
exports.useToggle = useToggle;
exports.default = useToggle;
