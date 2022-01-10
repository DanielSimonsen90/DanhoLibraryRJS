"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoadData = void 0;
const useAsync_1 = require("./wds/useAsync");
function useLoadData(callback, props, dependencies) {
    const { value, loading, error } = (0, useAsync_1.useAsync)(callback, dependencies);
    return [
        loading && props.loadingComponent,
        error && props.errorComponent,
        value && props.valueComponent
    ].filter(v => v)[0] || null;
}
exports.useLoadData = useLoadData;
exports.default = useLoadData;
