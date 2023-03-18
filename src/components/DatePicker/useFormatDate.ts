import { TimeSpan, Date } from "danholibraryjs";
import { useCallback } from "react";
import { LongDay, LongMonth } from "../../utils/Time/DateFormats";

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
  ({ years: date.year, months: 1, days: 1 }),
  date.time
).getTotalDays() / 7);

function formatDate(date: Date, format: string) {
  return date.toString(format);
}

type UseFormatDateReturn<HasDate extends boolean> =
  HasDate extends true 
    ? (format: string) => string 
    : (date: Date, format: string) => string;

export default function useFormatDate<HasDate extends boolean = true>(date?: Date): UseFormatDateReturn<HasDate> {
  const noDate = useCallback((date: Date, format: string) => formatDate(date, format), []) as UseFormatDateReturn<HasDate>;
  const hasDate = useCallback((format: string) => date && formatDate(date, format), [date]) as UseFormatDateReturn<HasDate>;
  return date ? hasDate : noDate;
}