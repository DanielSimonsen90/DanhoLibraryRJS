/// <reference types="react" />
import { Date } from 'danholibraryjs';
import { ClickEvent } from '../../../utils';
export type CalendarProps = {
    format: string;
    onDateSelected(date: Date, event: ClickEvent): void;
    close(): void;
    allowPastDates?: boolean;
    dateNames?: Array<string>;
    monthNames?: Array<string>;
};
export declare function Calendar({ format, onDateSelected, close, allowPastDates, monthNames, dateNames }: CalendarProps): JSX.Element;
export default Calendar;
export * from './hooks';
