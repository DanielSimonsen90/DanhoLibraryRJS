"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnterEsc = void 0;
const react_1 = require("react");
function useEnterEsc({ onEsc, onEnter }) {
    const createListener = (handler, ...keys) => (e) => {
        if (keys.includes(e.code)) {
            handler();
            e.preventDefault();
        }
    };
    (0, react_1.useEffect)(() => {
        const listener = createListener(onEnter, "Enter", "NumpadEnter");
        document.addEventListener("keydown", listener);
        return () => { document.removeEventListener("keydown", listener); };
    }, [onEnter]);
    (0, react_1.useEffect)(() => {
        const listener = createListener(onEsc, 'Escape');
        document.addEventListener("keydown", listener);
        return () => { document.removeEventListener("keydown", listener); };
    }, [onEsc]);
}
exports.useEnterEsc = useEnterEsc;
;
exports.default = useEnterEsc;
