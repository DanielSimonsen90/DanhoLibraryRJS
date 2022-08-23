import { useState } from 'react';
import Icon from 'react-fontawesome';
import { Date } from 'danholibraryjs';
import { useCalendarDays, getNow } from './hooks';
import useFormatDate, { dayNames as DayNames, monthNames as MonthNames } from '../useFormatDate';
import { ClickEvent } from '../../../utils';
import { weekdays as workdays, weekend } from '../../../utils/Time';
import { useEventListener } from '../../../hooks';

export type CalendarProps = {
    format: string
    onDateSelected(date: Date, event: ClickEvent): void,
    close(): void

    allowPastDates?: boolean
    dateNames?: Array<string>,
    monthNames?: Array<string>
}

export function Calendar({ 
    format, onDateSelected, close, 
    allowPastDates = false,
    monthNames = MonthNames,
    dateNames = DayNames
}: CalendarProps) {
    const now = getNow();
    const [selectedDate, setSelectedDate] = useState<Date>(now);
    const dates = useCalendarDays(selectedDate);
    const formatDate = useFormatDate<false>();
    useEventListener('keypress', (e, target) => {
        console.log(e.key)
    })


    const onDirectionClicked = (direction: 'previous' | 'next') => setSelectedDate(v => ({
        ...v.set({ 
            months: direction === 'previous' ? v.month - 2 : v.month 
        })
    }) as Date);
    const _onDateSelected = (date: Date, e: ClickEvent) => {
        if (!allowPastDates && date.time < now.time) return;
        onDateSelected(date, e)
        close();
    }
    const setDataTime = (date: Date) => (
        date.month < now.month || date.day < now.day && date.month <= now.month ? 'past' :
        date.day === now.day ? 'today' : 'future'
    );

    return (
        <div className="calendar">
            <header aria-labelledby='calendar-header'>
                {(allowPastDates || selectedDate.month > now.month) && <Icon name="angle-left" onClick={() => onDirectionClicked('previous')} />}
                <h1 id="calendar-header">
                    <span id="calendar-header-month" title={selectedDate.monthName}
                    >{monthNames[selectedDate.month - 1]}</span> <span id="calendar-header-month" title={selectedDate.year.toString()}
                    >{selectedDate.year}</span>
                </h1>
                <Icon name="angle-right" onKeyDown={e => console.log(e.key)} onClick={() => onDirectionClicked('next')} />
            </header>
            <hr />
            <section title="Calendar dates" className="calendar-dates">
                {dateNames.map(day => <h2 className='weekday' key={day}
                    data-workday={(workdays as Array<string>).includes(day)}
                    data-weekend={(weekend as Array<string>).includes(day)}
                >{day.substring(0, 3)}</h2>)}

                {dates.map(date => {
                    const toString = formatDate(date, format);
                    return (
                        <p key={toString} className='calendar-date' onClick={e => _onDateSelected(date, e)}
                            data-time={setDataTime(date)} title={toString}
                            data-selected={date === selectedDate ? 'selected' : null}
                        >
                            {date.day}
                        </p>
                    )
                })}
            </section>
        </div>
    );
}

export default Calendar;
export * from './hooks';