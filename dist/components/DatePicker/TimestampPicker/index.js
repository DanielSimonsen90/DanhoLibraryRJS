"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { className: "timestamp-picker-apm", type: "text", list: "apm", onChange: e => setAPM(e.target.value), value: apm }), (0, jsx_runtime_1.jsxs)("datalist", { id: "apm", children: [(0, jsx_runtime_1.jsx)("option", { value: "AM", children: "AM" }), (0, jsx_runtime_1.jsx)("option", { value: "PM", children: "PM" })] })] }));
}
function TimestampPicker({ type = '24h', format = '$hh24:$mm', onChange }) {
    const now = (0, Calendar_1.getNow)();
    const [hour, setHour] = (0, react_1.useState)(now.hours.toString());
    const [minute, setMinute] = (0, react_1.useState)((0, useFormatDate_1.doubleDigit)(now.minutes));
    const [apm, setAPM] = (0, react_1.useState)(now.isPM ? 'PM' : 'AM');
    const selectedDate = (0, react_1.useMemo)(() => ({ ...now }.set({
        hours: parseInt(hour),
        minutes: parseInt(minute)
    })), [hour, minute]);
    const formatDate = (0, useFormatDate_1.default)(selectedDate);
    (0, react_1.useEffect)(() => { onChange(selectedDate, formatDate(format)); }, [hour, minute, apm]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "timestamp-picker", children: [(0, jsx_runtime_1.jsx)("input", { className: "timestamp-picker__hour", type: "number", onChange: e => setHour(e.target.value), value: hour }), (0, jsx_runtime_1.jsx)("input", { className: "timestamp-picker__minute", type: "number", onChange: e => setMinute((0, useFormatDate_1.doubleDigit)(parseInt(e.target.value))), value: minute }), type === '12h' && (0, jsx_runtime_1.jsx)(TimestampImperial, { apm: apm, setApm: setAPM })] }));
}
exports.default = TimestampPicker;
