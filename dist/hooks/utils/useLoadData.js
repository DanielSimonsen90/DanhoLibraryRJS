"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoadData = void 0;
const useAsync_1 = require("./useAsync");
function useLoadData(callback, { returns, ...props }, dependencies) {
    const { value, loading, error } = (0, useAsync_1.useAsync)(callback, dependencies);
    const component = [
        loading && props.loadingComponent,
        error && props.errorComponent,
        value && props.valueComponent
    ].filter(v => v)[0] || null;
    return [
        ((returns !== null && returns !== void 0 ? returns : (returns = "function")) === "function" ?
            () => component :
            component),
        loading
    ];
}
exports.useLoadData = useLoadData;
exports.default = useLoadData;
