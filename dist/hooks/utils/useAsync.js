"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsync = void 0;
const react_1 = require("react");
/**
 * Run something asyncronously - returns object that informs whether callback is still being processed (loading), callback errored (error) or callback finished (value)
 * @param callback Callback to run
 * @param dependencies Dependencies
 */
function useAsync(callback, dependencies = []) {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)();
    const [value, setValue] = (0, react_1.useState)();
    const callbackMemoized = (0, react_1.useCallback)(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false));
    }, dependencies);
    (0, react_1.useEffect)(() => { callbackMemoized(); }, [callbackMemoized]);
    return { loading, error, value };
}
exports.useAsync = useAsync;
exports.default = useAsync;
