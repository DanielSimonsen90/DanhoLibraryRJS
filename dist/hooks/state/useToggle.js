"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggle = void 0;
const react_1 = require("react");
/**
 * Toggles between defaultValue & toggledValue.
 * @param defaultValue The default value of the toggle
 * @param toggledValue The value of the toggle when toggled
 * @param changes Change callbacks if needed for when a toggle has occured.
 * @returns [value: T, toggleValue: (value?: T) => void, isToggled: boolean]
 */
function useToggle(defaultValue, toggledValue, { onDefault, onToggled, onChange } = {
    onDefault: (value) => value,
    onChange: (value) => { },
    onToggled: (value) => value,
}) {
    const [value, setValue] = (0, react_1.useState)(defaultValue);
    const [onToggledTrue, onToggledFalse, onToggleChanged] = [
        (0, react_1.useRef)(onToggled),
        (0, react_1.useRef)(onDefault),
        (0, react_1.useRef)(onChange),
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
        onChange(v);
        return v;
    }), [value]);
    return [value, toggleValue, isToggled];
}
exports.useToggle = useToggle;
exports.default = useToggle;
