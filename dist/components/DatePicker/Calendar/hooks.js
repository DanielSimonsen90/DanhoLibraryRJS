"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNow = exports.useCalendarDays = exports.useLastDayOfMonth = exports.useFirstDayOfMonth = void 0;
const danholibraryjs_1 = require("danholibraryjs");
const react_1 = require("react");
function useFirstDayOfMonth(date) {
    return (0, react_1.useMemo)(() => new danholibraryjs_1.Date({ years: date.year, months: date.month, days: 1 }), [date]);
}
exports.useFirstDayOfMonth = useFirstDayOfMonth;
function useLastDayOfMonth(date) {
    return (0, react_1.useMemo)(() => new danholibraryjs_1.Date({ years: date.year, months: date.month, days: danholibraryjs_1.Time.daysInMonth[date.month - 1] }), [date]);
}
exports.useLastDayOfMonth = useLastDayOfMonth;
function useCalendarDays(date) {
    const firstDotM = useFirstDayOfMonth(date);
    const lastDotM = useLastDayOfMonth(date);
    const key = (0, react_1.useMemo)(() => firstDotM.toString(), [firstDotM]);
    const calculate = (0, react_1.useCallback)((rendered) => {
        const result = {
            [key]: new Array()
        };
        console.log('Starting from', {
            result, props: [firstDotM, date, lastDotM]
        });
        // First day of the Month isn't a Monday, push all days from month prior to date and convert to Date
        if (firstDotM.weekDayShort !== 'Mon') {
            const daysFromMonday = danholibraryjs_1.Time.DayNames.findIndex(v => v === firstDotM.weekDay);
            const previousMonthDays = danholibraryjs_1.Time.daysInMonth[firstDotM.month - 2] || danholibraryjs_1.Time.daysInMonth[12 - firstDotM.month - 2];
            for (let i = 0; i < daysFromMonday; i++) {
                const item = new danholibraryjs_1.Date(firstDotM.time).set({
                    months: firstDotM.month - 2,
                    days: previousMonthDays - i
                });
                result[key].push(item);
                console.log('Iterate previous month', { daysFromMonday, previousMonthDays, date, result: result[key][i], item });
            }
        }
        // Add first day of the month
        result[key].push(firstDotM);
        // Add days between first day- and last day of the month
        for (let i = firstDotM.day + 1; i < lastDotM.day; i++) {
            const previous = result[key][i - 1];
            result[key].push(new danholibraryjs_1.Date(previous.time).set({ days: previous.day + 1 }));
            // console.log({result[key], i, previous, firstDotM, lastDotM});
        }
        //Push last day of the month
        result[key].push(lastDotM);
        // Last day of the Month isn't a Sunday, push remaining days and convert to Date
        if (lastDotM.weekDayShort !== 'Sun') {
            const daysInAWeek = Math.round(danholibraryjs_1.Time.week / danholibraryjs_1.Time.day);
            const daysTillSunday = daysInAWeek - danholibraryjs_1.Time.DayNames.findIndex(v => v === lastDotM.weekDay);
            for (let i = 1; i < daysTillSunday; i++) {
                const date = new danholibraryjs_1.Date(lastDotM.time).set({ months: lastDotM.month, days: i });
                result[key].push(date);
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
    return new danholibraryjs_1.Date().set({
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
    });
}
exports.getNow = getNow;
