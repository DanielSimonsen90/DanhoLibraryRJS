import { useState } from 'react';
import Icon from 'react-fontawesome';
import { fromEwToExtended, useCalendarDays, getNow } from './hooks';
import { dayNames } from '../useFormatDate';
import { ClickEvent } from '../../../utils';
import { LongDay, LongMonth, ShortDay, ShortMonth, weekdays as workdays, weekend } from '../../../utils/Time';

type Props = {
    allowPastDates?: boolean
    onDateSelected(date: ExtendedDate, event: ClickEvent): void,
    close(): void
}
export { Props as CalendarProps }
export type ExtendedDate = {
    time: number,
    date: Date,

    year: number,
    month: number,
    week: number,
    day: number,
    hour: number,
    hourShort: number,
    isPM: boolean,
    minute: number,
    second: number,
    millisecond: number

    monthName: ShortMonth,
    monthNameLong: LongMonth,
    weekDay: ShortDay,
    weekDayLong: LongDay,
    toString: string
}

export function Calendar({ allowPastDates = false, onDateSelected, close }: Props) {
    const now = getNow();
    const [selectedDate, setSelectedDate] = useState<ExtendedDate>(now);
    const dates = useCalendarDays(selectedDate);


    const onDirectionClicked = (direction: 'previous' | 'next') => setSelectedDate(v => (
        { ...v, month: direction === 'previous' ? v.month - 1 : v.month + 1  }
    ));
    const _onDateSelected = (date: ExtendedDate, e: ClickEvent) => {
        if (!allowPastDates && date.time < now.time) return;
        onDateSelected(date, e)
        close();
    }
    const setDataTime = (date: ExtendedDate) => (
        date.month < now.month || date.day < now.day ? 'past' :
        date.day === now.day ? 'today' :
        date.month > now.month ? 'next-month' : 'future'
    );

    return (
        <div className="calendar">
            <header>
                {selectedDate.month > now.month && <Icon name="angle-left" onClick={() => onDirectionClicked('previous')} />}
                <h1>
                    <span>{selectedDate.monthNameLong}</span> <span>{selectedDate.year}</span>
                </h1>
                <Icon name="angle-right" onClick={() => onDirectionClicked('next')} />
            </header>
            <hr />
            <section className="weekdays">
                {dayNames.map(day => <h2 className='weekday' key={day}
                    data-workday={workdays.includes(day)}
                    data-weekend={weekend.includes(day)}
                >{day}</h2>)}
            </section>
            <section className="calendar-dates">
                {dates.map(date => (
                    <div key={`${date.day}-${date.month}-${date.year}`} className='calendar-date' onClick={e => _onDateSelected(date, e)}
                        data-time={setDataTime(date)} 
                        data-selected={date === selectedDate ? 'selected' : null}
                    >
                        {date.day}
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Calendar;
export * from './hooks';