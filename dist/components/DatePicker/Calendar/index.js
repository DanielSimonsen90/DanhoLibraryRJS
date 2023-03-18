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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_fontawesome_1 = __importDefault(require("react-fontawesome"));
const hooks_1 = require("./hooks");
const useFormatDate_1 = __importStar(require("../useFormatDate"));
const Time_1 = require("../../../utils/Time");
const hooks_2 = require("../../../hooks");
function Calendar({ format, onDateSelected, close, allowPastDates = false, monthNames = useFormatDate_1.monthNames, dateNames = useFormatDate_1.dayNames }) {
    const now = (0, hooks_1.getNow)();
    const [selectedDate, setSelectedDate] = (0, react_1.useState)(now);
    const dates = (0, hooks_1.useCalendarDays)(selectedDate);
    const formatDate = (0, useFormatDate_1.default)();
    (0, hooks_2.useEventListener)('keypress', (e, target) => {
        console.log(e.key);
    });
    const onDirectionClicked = (direction) => setSelectedDate(v => ({
        ...v.set({
            months: direction === 'previous' ? v.month - 2 : v.month
        })
    }));
    const _onDateSelected = (date, e) => {
        if (!allowPastDates && date.time < now.time)
            return;
        onDateSelected(date, e);
        close();
    };
    const setDataTime = (date) => (date.month < now.month || date.day < now.day && date.month <= now.month ? 'past' :
        date.day === now.day ? 'today' : 'future');
    return ((0, jsx_runtime_1.jsxs)("div", { className: "calendar", children: [(0, jsx_runtime_1.jsxs)("header", { "aria-labelledby": 'calendar-header', children: [(allowPastDates || selectedDate.month > now.month) && (0, jsx_runtime_1.jsx)(react_fontawesome_1.default, { name: "angle-left", onClick: () => onDirectionClicked('previous') }), (0, jsx_runtime_1.jsxs)("h1", { id: "calendar-header", children: [(0, jsx_runtime_1.jsx)("span", { id: "calendar-header__month", title: selectedDate.monthName, children: monthNames[selectedDate.month - 1] }), (0, jsx_runtime_1.jsx)("span", { id: "calendar-header__year", title: selectedDate.year.toString(), children: selectedDate.year })] }), (0, jsx_runtime_1.jsx)(react_fontawesome_1.default, { name: "angle-right", onKeyDown: e => console.log(e.key), onClick: () => onDirectionClicked('next') })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("section", { title: "Calendar dates", className: "calendar-dates", children: [dateNames.map(day => (0, jsx_runtime_1.jsx)("h2", { className: 'weekday', "data-workday": Time_1.weekdays.includes(day), "data-weekend": Time_1.weekend.includes(day), children: day.substring(0, 3) }, day)), dates.map(date => {
                        const toString = formatDate(date, format);
                        return ((0, jsx_runtime_1.jsx)("p", { className: 'calendar-date', onClick: e => _onDateSelected(date, e), "data-time": setDataTime(date), title: toString, "data-selected": date === selectedDate ? 'selected' : null, children: date.day }, toString));
                    })] })] }));
}
exports.Calendar = Calendar;
exports.default = Calendar;
__exportStar(require("./hooks"), exports);
