"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGeolocation = void 0;
const react_1 = require("react");
/**
 * Receive all the geographical information based on options
 * @param options Geographical options
 */
function useGeolocation(options) {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)();
    const [value, setValue] = (0, react_1.useState)({});
    (0, react_1.useEffect)(() => {
        const successHandler = e => {
            setLoading(false);
            setError(null);
            setValue(e.coords);
        };
        const errorHandler = e => {
            setError(e);
            setLoading(false);
        };
        navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);
        const id = navigator.geolocation.watchPosition(successHandler, errorHandler, options);
        return () => navigator.geolocation.clearWatch(id);
    }, [options]);
    return { loading, error, value };
}
exports.useGeolocation = useGeolocation;
exports.default = useGeolocation;
