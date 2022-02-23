import { TimeSpan } from "danholibraryjs";
import { useCallback, useMemo } from "react";
import { LongDay, LongMonth } from "../../utils/Time/DateFormats";
import { ExtendedDate } from "./Calendar";

export const doubleDigit = (value: number) => value.toString().length < 2 ? `0${value}` : value.toString(); 
export const monthNames = new Array<LongMonth>(
    'Janurary', 'February', 
    'March', 'April', 'May',
    'June', 'July', 'August',
    'September', 'October', 'November',
    'December'
);
export const dayNames = new Array<LongDay>('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
export const weekFrom = (date: Date) => Math.round(new TimeSpan(
    new Date(date.getFullYear(), 1, 1), 
    date.getTime()
).getTotalDays() / 7)

function formatDate(date: ExtendedDate, format: string) {
    return format
        .replaceAll('$year', date.year.toString())
        .replaceAll('$month', monthNames[date.month])
        .replaceAll('$MM', doubleDigit(date.month))
        .replaceAll('$M', date.month.toString())

        .replaceAll('$week', date.week.toString())

        .replaceAll('$weekday', date.weekDay)
        .replaceAll('$dd', doubleDigit(date.day))
        .replaceAll('$d', date.day.toString())

        .replaceAll('$hh12', `${doubleDigit(date.hour)}${date.hour < 12 ? 'AM' : 'PM'}`)
        .replaceAll('$h12', `${date.hour > 12 ? 12 - date.hour : date.hour}${date.hour < 12 ? 'AM' : 'PM'}`)
        .replaceAll('$hh24', doubleDigit(date.hour))
        .replaceAll('$h24', date.hour.toString())

        .replaceAll('$mm', doubleDigit(date.minute))
        .replaceAll('$m', date.minute.toString())

        .replaceAll('$ss', doubleDigit(date.second))
        .replaceAll('$s', date.second.toString())

        .replaceAll('$msms', doubleDigit(date.millisecond))
        .replaceAll('$ms', date.millisecond.toString())

        .replaceAll('$relative', new TimeSpan(new Date(), date.date).toString())
}

type UseFormatDateReturn<HasDate extends boolean> = 
    HasDate extends true ? 
        (format: string) => string : 
        (date: ExtendedDate, format: string) => string
;
export default function useFormatDate<HasDate extends boolean = true>(date?: ExtendedDate): UseFormatDateReturn<HasDate> {
    const noDate = useCallback((date: ExtendedDate, format: string) => formatDate(date, format), []) as UseFormatDateReturn<HasDate>;
    const hasDate = useCallback((format: string) => date && formatDate(date, format), [date]) as UseFormatDateReturn<HasDate>;
    return date ? hasDate : noDate;
}