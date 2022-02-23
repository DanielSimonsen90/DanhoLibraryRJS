import { Time } from "danholibraryjs";
import { useCallback, useMemo } from "react";
import { LongDay, LongMonth, ShortDay, ShortMonth } from "../../../utils/Time";
import { ExtendedDate } from ".";
import { dayNames, monthNames, weekFrom } from "../useFormatDate";

export function fromEwToExtended(ew: Date): ExtendedDate {
    const long = <Type>(array: Array<any>, value: number) => (array[value] || array[array.length - 1]) as Type;
    const short = <Type>(array: Array<any>, value: number) => (array[value] || array[array.length - 1]).substring(0, 3) as Type;
    const isPM = ew.getHours() >= 12

    return {
        time: ew.getTime(),
        date: ew,

        year: ew.getFullYear(),
        month: ew.getMonth() + 1,
        week: weekFrom(ew),
        weekDay: short<ShortDay>(dayNames, ew.getDay() - 1),
        weekDayLong: long<LongDay>(dayNames, ew.getDay() - 1),
        day: ew.getDate(),
        hour: ew.getHours(),
        hourShort: isPM ? 12 - ew.getHours() : ew.getHours(),
        isPM,

        minute: ew.getMinutes(),
        second: ew.getSeconds(),
        millisecond: ew.getMilliseconds(),

        monthName: short<ShortMonth>(monthNames, ew.getMonth()),
        monthNameLong: long<LongMonth>(monthNames, ew.getMonth()),
        get toString() {
            return `${this.weekDay}, ${this.day}/${this.month}/${this.year}`
        }
    }
}

export function useFirstDayOfMonth(date: ExtendedDate) {
    return useMemo(() => fromEwToExtended(new Date(
        date.year, 
        date.month - 1, 
        1
    )), [date]);
}
export function useLastDayOfMonth(date: ExtendedDate) {
    return useMemo<ExtendedDate>(() => fromEwToExtended(new Date(
        date.year, 
        date.month - 1, 
        Time.daysInMonth[date.month - 1]
    )), [date]);
}

export function useCalendarDays(date: ExtendedDate) {
    const firstDotM = useFirstDayOfMonth(date);
    const lastDotM = useLastDayOfMonth(date);
    const key = useMemo(() => firstDotM.toString, [firstDotM]);
    const calculate = useCallback((rendered: number): Array<ExtendedDate> => {
        const result = {
            [key]: new Array<ExtendedDate>()
        };
        console.log('Starting from', {
            result, props: [firstDotM, date, lastDotM]
        })

        // First day of the Month isn't a Monday, push all days from month prior to date and convert to ExtendedDate
        if (firstDotM.weekDay !== 'Mon') {
            const daysFromMonday = dayNames.findIndex(v => v === firstDotM.weekDayLong);
            const previousMonthDays = Time.daysInMonth[firstDotM.month - 2] || Time.daysInMonth[12 - firstDotM.month - 2];

            for (let i = 0; i < daysFromMonday; i++) {
                const time = new Date(firstDotM.time).setMonth(firstDotM.month - 2, previousMonthDays - i);
                const item = new Date(time);
                result[key].push(fromEwToExtended(item))

                console.log('Iterate previous month', { daysFromMonday, previousMonthDays, time, date, item, result: result[key][i] });

            }
        }

        // Add first day of the month
        result[key].push(firstDotM);

        // Add days between first day- and last day of the month
        for (let i = firstDotM.day + 1; i < lastDotM.day; i++) {
            const previous = result[key][i - 1];
            result[key].push(
                fromEwToExtended(
                    new Date(
                        new Date(previous.time).setDate(previous.day + 1)
                    )
                )
            );
            // console.log({result[key], i, previous, firstDotM, lastDotM});
        }

        //Push last day of the month
        result[key].push(lastDotM);

        // Last day of the Month isn't a Sunday, push remaining days and convert to ExtendedDate
        if (lastDotM.weekDay !== 'Sun') {
            const daysInAWeek = Math.round(Time.week / Time.day);
            const daysTillSunday = daysInAWeek - dayNames.findIndex(v => v === lastDotM.weekDayLong);

            for (let i = 1; i < daysTillSunday; i++) {
                const time = new Date(lastDotM.time).setMonth(lastDotM.month, i);
                const date = new Date(time);
                result[key].push(fromEwToExtended(date));
            }
        }

        console.log('Return result[key]', { props: [firstDotM, date, lastDotM], result: result[key] });

        return result[key].reduce((actualResult, date) => {
            if (!actualResult.some(d => d.time === date.time)) actualResult.push(date);
            return actualResult;
        }, new Array<ExtendedDate>());
    }, [firstDotM])

    return useMemo(() => calculate(0), [firstDotM]);
}

export function getNow() {
    return fromEwToExtended(
        new Date(
            new Date().setHours(0, 0, 0, 0)
        )
    )
}