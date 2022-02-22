"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Calendar_1 = require("../Calendar");
const useFormatDate_1 = __importStar(require("../useFormatDate"));
function TimestampImperial({ apm, setApm: setAPM }) {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { className: "timestamp-picker-apm", type: "text", list: "apm", onChange: e => setAPM(e.target.value), value: apm }, void 0), (0, jsx_runtime_1.jsxs)("datalist", { id: "apm", children: [(0, jsx_runtime_1.jsx)("option", { value: "AM", children: "AM" }, void 0), (0, jsx_runtime_1.jsx)("option", { value: "PM", children: "PM" }, void 0)] }, void 0)] }, void 0));
}
function TimestampPicker({ type = '24h', format = '$hh24:$mm', onChange }) {
    const now = (0, Calendar_1.getNow)();
    const [hour, setHour] = (0, react_1.useState)(now.hour.toString());
    const [minute, setMinute] = (0, react_1.useState)((0, useFormatDate_1.doubleDigit)(now.minute));
    const [apm, setAPM] = (0, react_1.useState)(now.isPM ? 'PM' : 'AM');
    const selectedDate = (0, react_1.useMemo)(() => ({ ...now,
        hour: parseInt(hour),
        minute: parseInt(minute)
    }), [hour, minute]);
    const formatDate = (0, useFormatDate_1.default)(selectedDate);
    (0, react_1.useEffect)(() => { onChange(selectedDate, formatDate(format)); }, [hour, minute, apm]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "timestamp-picker", children: [(0, jsx_runtime_1.jsx)("input", { className: "timestamp-picker-hour", type: "number", onChange: e => setHour(e.target.value), value: hour }, void 0), (0, jsx_runtime_1.jsx)("input", { className: "timestamp-picker-minute", type: "number", onChange: e => setMinute((0, useFormatDate_1.doubleDigit)(parseInt(e.target.value))), value: minute }, void 0), type === '12h' && (0, jsx_runtime_1.jsx)(TimestampImperial, { apm: apm, setApm: setAPM }, void 0)] }, void 0));
}
exports.default = TimestampPicker;
