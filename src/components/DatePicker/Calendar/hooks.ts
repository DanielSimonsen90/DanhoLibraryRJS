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

    return useMemo(() => {
        const result = new Array<ExtendedDate>();

        // First day of the Month isn't a monday, push all days from month prior to date and convert to ExtendedDate
        if (firstDotM.weekDay !== 'Mon') {
            const daysFromMonday = dayNames.findIndex(v => v === firstDotM.weekDayLong); //1
            const previousMonthDays = Time.daysInMonth[firstDotM.month - 2]; //31

            for (let i = 0; i < daysFromMonday; i++) {
                const setMonth = new Date(firstDotM.time).setMonth(firstDotM.month - 2, previousMonthDays - i); // 31/1/2022
                const date = new Date(setMonth);
                result.push(fromEwToExtended(date))
            }
        }

        // Add first day of the month
        result.push(firstDotM);

        // Add days between first day- and last day of the month
        for (let i = firstDotM.day + 1; i < lastDotM.day; i++) {
            const previous = result[i - 1];
            result.push(
                fromEwToExtended(
                    new Date(
                        new Date(previous.time).setDate(previous.day + 1)
                    )
                )
            );
            // console.log({result, i, previous, firstDotM, lastDotM});
            
        }

        //Push last day of the month
        result.push(lastDotM);

        return result;
    }, [date]);
}

export function getNow() {
    return fromEwToExtended(
        new Date(
            new Date().setHours(0, 0, 0, 0)
        )
    )
}