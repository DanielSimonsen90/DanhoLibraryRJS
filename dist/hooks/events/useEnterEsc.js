"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnterEsc = void 0;
const react_1 = require("react");
function useEnterEsc({ onEsc, onEnter, target = document }) {
    const createListener = (handler, ...keys) => (e) => {
        if (keys.includes(e.code)) {
            e.preventDefault();
            handler === null || handler === void 0 ? void 0 : handler();
        }
    };
    (0, react_1.useEffect)(() => {
        const listener = createListener(onEnter, "Enter", "NumpadEnter");
        target.addEventListener("keydown", { handleEvent: listener });
        return () => { target.removeEventListener("keydown", { handleEvent: listener }); };
    }, [onEnter]);
    (0, react_1.useEffect)(() => {
        const listener = createListener(onEsc, 'Escape');
        target.addEventListener("keydown", { handleEvent: listener });
        return () => { target.removeEventListener("keydown", { handleEvent: listener }); };
    }, [onEsc]);
}
exports.useEnterEsc = useEnterEsc;
;
exports.default = useEnterEsc;
