"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNow = exports.useCalendarDays = exports.useLastDayOfMonth = exports.useFirstDayOfMonth = exports.fromEwToExtended = void 0;
const danholibraryjs_1 = require("danholibraryjs");
const react_1 = require("react");
const useFormatDate_1 = require("../useFormatDate");
function fromEwToExtended(ew) {
    const long = (array, value) => (array[value] || array[array.length - 1]);
    const short = (array, value) => (array[value] || array[array.length - 1]).substring(0, 3);
    const isPM = ew.getHours() >= 12;
    return {
        time: ew.getTime(),
        date: ew,
        year: ew.getFullYear(),
        month: ew.getMonth() + 1,
        week: (0, useFormatDate_1.weekFrom)(ew),
        weekDay: short(useFormatDate_1.dayNames, ew.getDay() - 1),
        weekDayLong: long(useFormatDate_1.dayNames, ew.getDay() - 1),
        day: ew.getDate(),
        hour: ew.getHours(),
        hourShort: isPM ? 12 - ew.getHours() : ew.getHours(),
        isPM,
        minute: ew.getMinutes(),
        second: ew.getSeconds(),
        millisecond: ew.getMilliseconds(),
        monthName: short(useFormatDate_1.monthNames, ew.getMonth()),
        monthNameLong: long(useFormatDate_1.monthNames, ew.getMonth()),
        get toString() {
            return `${this.weekDay}, ${this.day}/${this.month}/${this.year}`;
        }
    };
}
exports.fromEwToExtended = fromEwToExtended;
function useFirstDayOfMonth(date) {
    return (0, react_1.useMemo)(() => fromEwToExtended(new Date(date.year, date.month - 1, 1)), [date]);
}
exports.useFirstDayOfMonth = useFirstDayOfMonth;
function useLastDayOfMonth(date) {
    return (0, react_1.useMemo)(() => fromEwToExtended(new Date(date.year, date.month - 1, danholibraryjs_1.Time.daysInMonth[date.month - 1])), [date]);
}
exports.useLastDayOfMonth = useLastDayOfMonth;
function useCalendarDays(date) {
    const firstDotM = useFirstDayOfMonth(date);
    const lastDotM = useLastDayOfMonth(date);
    const key = (0, react_1.useMemo)(() => firstDotM.toString, [firstDotM]);
    const calculate = (0, react_1.useCallback)((rendered) => {
        const result = {
            [key]: new Array()
        };
        console.log('Starting from', {
            result, props: [firstDotM, date, lastDotM]
        });
        // First day of the Month isn't a Monday, push all days from month prior to date and convert to ExtendedDate
        if (firstDotM.weekDay !== 'Mon') {
            const daysFromMonday = useFormatDate_1.dayNames.findIndex(v => v === firstDotM.weekDayLong);
            const previousMonthDays = danholibraryjs_1.Time.daysInMonth[firstDotM.month - 2] || danholibraryjs_1.Time.daysInMonth[12 - firstDotM.month - 2];
            for (let i = 0; i < daysFromMonday; i++) {
                const time = new Date(firstDotM.time).setMonth(firstDotM.month - 2, previousMonthDays - i);
                const item = new Date(time);
                result[key].push(fromEwToExtended(item));
                console.log('Iterate previous month', { daysFromMonday, previousMonthDays, time, date, item, result: result[key][i] });
            }
        }
        // Add first day of the month
        result[key].push(firstDotM);
        // Add days between first day- and last day of the month
        for (let i = firstDotM.day + 1; i < lastDotM.day; i++) {
            const previous = result[key][i - 1];
            result[key].push(fromEwToExtended(new Date(new Date(previous.time).setDate(previous.day + 1))));
            // console.log({result[key], i, previous, firstDotM, lastDotM});
        }
        //Push last day of the month
        result[key].push(lastDotM);
        // Last day of the Month isn't a Sunday, push remaining days and convert to ExtendedDate
        if (lastDotM.weekDay !== 'Sun') {
            const daysInAWeek = Math.round(danholibraryjs_1.Time.week / danholibraryjs_1.Time.day);
            const daysTillSunday = daysInAWeek - useFormatDate_1.dayNames.findIndex(v => v === lastDotM.weekDayLong);
            for (let i = 1; i < daysTillSunday; i++) {
                const time = new Date(lastDotM.time).setMonth(lastDotM.month, i);
                const date = new Date(time);
                result[key].push(fromEwToExtended(date));
            }
        }
        console.log('Return result[key]', { props: [firstDotM, date, lastDotM], result: result[key] });
        return result[key].reduce((actualResult, date) => {
            if (!actualResult.some(d => d.time === date.time))
                actualResult.push(date);
            return actualResult;
        }, new Array());
    }, [firstDotM]);
    return (0, react_1.useMemo)(() => calculate(0), [firstDotM]);
}
exports.useCalendarDays = useCalendarDays;
function getNow() {
    return fromEwToExtended(new Date(new Date().setHours(0, 0, 0, 0)));
}
exports.getNow = getNow;
