# [DanhoLibraryRJS](../../README.md) / [Components](../index.md) / [User Interface](./index.md) / [DatePicker](./index.md) / Calendar
Calendar component used to achieve DatePicker. Can be used seperately.

## References
* Hooks
    * [useEventListener](../../../Hooks/Events/useEventListener.md)

* Utils
    * [Time](../../../Utils/Time.md)

## Module
```tsx
export type CalendarProps = {
    /**
     * Same format type as from DatePicker
     */
    format: string;
    onDateSelected(date: Date, event: ClickEvent): void;
    
    /**
     * Closes the Calendar
     */
    close(): void;

    allowPastDates?: boolean;
    dateNames?: string;
    monthNames?: string;
}

export function Calendar(props: CalendarProps): React.FunctionComponent<CalendarProps>;
```