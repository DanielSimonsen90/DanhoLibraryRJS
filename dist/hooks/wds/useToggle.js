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
function useToggle(defaultValue, toggledValue, onSetTrue, onSetFalse) {
    const [value, setValue] = (0, react_1.useState)(defaultValue);
    const [onToggledTrue, onToggledFalse] = [
        (0, react_1.useRef)(onSetTrue || ((v) => v)),
        (0, react_1.useRef)(onSetFalse || ((v) => v))
    ];
    const isToggled = (0, react_1.useMemo)(() => value === toggledValue, [value]);
    const toggleValue = (0, react_1.useCallback)((newValue) => setValue(() => {
        let v;
        if (isToggled) {
            v = newValue !== null && newValue !== void 0 ? newValue : defaultValue;
            v === defaultValue ? onToggledFalse.current(v) : onToggledTrue.current(v);
        }
        else {
            v = newValue !== null && newValue !== void 0 ? newValue : toggledValue;
            v === defaultValue ? onToggledTrue.current(v) : onToggledFalse.current(v);
        }
        return v;
    }), [value]);
    return [value, toggleValue, isToggled];
}
exports.useToggle = useToggle;
exports.default = useToggle;
