/// <reference types="react" />
import { ClickEvent } from '../../../utils';
import { LongDay, LongMonth, ShortDay, ShortMonth } from '../../../utils/Time';
declare type Props = {
    allowPastDates?: boolean;
    onDateSelected(date: ExtendedDate, event: ClickEvent): void;
    close(): void;
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
export declare function Calendar({ allowPastDates, onDateSelected, close }: Props): JSX.Element;
export default Calendar;
export * from './hooks';
