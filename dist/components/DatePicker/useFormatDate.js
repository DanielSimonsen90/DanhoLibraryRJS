"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weekFrom = exports.dayNames = exports.monthNames = exports.doubleDigit = void 0;
const danholibraryjs_1 = require("danholibraryjs");
const react_1 = require("react");
const doubleDigit = (value) => value.toString().length < 2 ? `0${value}` : value.toString();
exports.doubleDigit = doubleDigit;
exports.monthNames = new Array('Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
exports.dayNames = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
const weekFrom = (date) => Math.round(new danholibraryjs_1.TimeSpan(({ years: date.year, months: 1, days: 1 }), date.time).getTotalDays() / 7);
exports.weekFrom = weekFrom;
function formatDate(date, format) {
    return date.toString(format);
}
function useFormatDate(date) {
    const noDate = (0, react_1.useCallback)((date, format) => formatDate(date, format), []);
    const hasDate = (0, react_1.useCallback)((format) => date && formatDate(date, format), [date]);
    return date ? hasDate : noDate;
}
exports.default = useFormatDate;
