import { useState } from "react";
import Icon from 'react-fontawesome';
import { Date } from "danholibraryjs";
import { useStateOnChange, useUpdateEffect } from "../../hooks";
import useFormatDate from "./useFormatDate";
import Calendar from "./Calendar";
import { getNow } from "./Calendar/hooks";
import Button from "../Button";

export type DatePickerProps = {
  onChange(value: Date, formatted: string): void,

  allowPastDates?: boolean;
  buttonSubmitTitle?: string,
  dateLabelTitle?: string,
  dateNames?: Array<string>,
  /**
   * Formatting the date in the input.
   * @$year Replaced with year of the date
   * 
   * @$month Replaced with month name
   * @$MM replaced with double digit month
   * @$M replaced with single digit month
   * 
   * @$week replaced with week of the year
   * 
   * @$weekday Replaced with day of the week
   * @$dd Replaced with double digit day
   * @$d Replaced with single digit day
   * 
   * @$hh12 Replaced with double digit hour in 12-hour format
   * @$hh24 Replaced with double digit hour in 24-hour format     
   * @$h12 Replaced with single digit hour in 12-hour format
   * @$h24 Replaced with single digit hour in 24-hour format
   * 
   * @$mm Replaced with double digit minute
   * @$m Replaced with single digit minute
   * 
   * @$ss Replaced with double digit second
   * @$s Replaced with single digit second
   * 
   * @msms Replaced with double digit millisecond
   * @ms Replaced with single digit millisecond
   * 
   * @$relative Replaced with relative timeformat as TimeSpan
   */
  format?: string,
  monthNames?: Array<string>;
};

export function DatePicker({
  onChange, dateNames, monthNames,

  allowPastDates = false,
  buttonSubmitTitle = "Select Date",
  dateLabelTitle = "Date",
  format = "$dd/$MM/$year",
}: DatePickerProps) {
  const now = getNow();
  const [date, setDate] = useState(now);
  const [calendarMode, setCalendarMode] = useState(false);
  const formatDate = useFormatDate(date);
  const [inputValue, inputValueFormatted, setInputValue] = useStateOnChange(formatDate(format), 0);

  useUpdateEffect(() => onChange(date, inputValueFormatted), [date]);

  return (
    <section className="datepicker">
      {calendarMode
        ? <Calendar format={format} allowPastDates={allowPastDates}
            dateNames={dateNames} monthNames={monthNames}
            onDateSelected={setDate} close={() => setCalendarMode(false)}
          /> 
        : <>
          <label htmlFor="date-input">{dateLabelTitle}</label>
          <input id="date-input" type="text" value={calendarMode ? inputValue : inputValueFormatted} onChange={e => setInputValue(e.target.value)} />
          <Icon tabIndex={0} name="calendar" onKeyDown={e => (e.key === 'Enter' || e.key === 'NumpadEnter') && setCalendarMode(true)} onClick={() => setCalendarMode(true)} />
          <Button crud="create" importance="primary" onClick={() => onChange(date, inputValueFormatted)} value={buttonSubmitTitle} />
        </>
      }
    </section>
  );
}

export default DatePicker;
export * from './Calendar';