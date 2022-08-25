# [DanhoLibraryRJS](../../index.md) / [Components](../index.md) / [User Interface](./index.md) / [DatePicker](./index.md) / Hooks
Hooks used to achieve the DatePicker functionality.
This module *heavily* relies on Date/DanhoDate from danholibraryjs.

## [Module](../../../../src/components/DatePicker/Calendar/hooks.ts)
```ts
export function useFirstDayOfMonth(date: DanhoDate): DanhoDate;
export function useLastDayOfMonth(date: DanhoDate): DanhoDate;
export function useCalendarDays(date: DanhoDate): Array<DanhoDate>;

export function getNow(): DanhoDate;
```