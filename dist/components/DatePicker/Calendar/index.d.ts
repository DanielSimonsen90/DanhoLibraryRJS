/// <reference types="react" />
import { ClickEvent } from '../../../utils';
import { LongDay, LongMonth, ShortDay, ShortMonth } from '../../../utils/Time';
declare type Props = {
    format: string;
    onDateSelected(date: ExtendedDate, event: ClickEvent): void;
    close(): void;
    allowPastDates?: boolean;
    dateNames?: Array<string>;
    monthNames?: Array<string>;
};
export { Props as CalendarProps };
export declare type ExtendedDate = {
    time: number;
    date: Date;
    year: number;
    month: number;
    week: number;
    day: number;
    hour: number;
    hourShort: number;
    isPM: boolean;
    minute: number;
    second: number;
    millisecond: number;
    monthName: ShortMonth;
    monthNameLong: LongMonth;
    weekDay: ShortDay;
    weekDayLong: LongDay;
    toString: string;
};
export declare function Calendar({ format, onDateSelected, close, allowPastDates, monthNames, dateNames }: Props): JSX.Element;
export default Calendar;
export * from './hooks';
