/// <reference types="react" />
import { Date } from 'danholibraryjs';
import { ClickEvent } from '../../../utils';
declare type Props = {
    format: string;
    onDateSelected(date: Date, event: ClickEvent): void;
    close(): void;
    allowPastDates?: boolean;
    dateNames?: Array<string>;
    monthNames?: Array<string>;
};
export { Props as CalendarProps };
export declare function Calendar({ format, onDateSelected, close, allowPastDates, monthNames, dateNames }: Props): JSX.Element;
export default Calendar;
export * from './hooks';
