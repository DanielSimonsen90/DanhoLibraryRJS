# [DanhoLibraryRJS](../../../index.md) / [Utils](../index.md) / Time
Time utility types

## Table of Contents
* [DateFormats](./DateFormats.md)
* [TimeFormats](./TimeFormats.md)

## [Module](../../../src/utils/Time/index.ts)
```ts
export type Double = `${number}${number}`; 
export type Quadouble = `${Double}${Double}`;

export type DateTimeFormats<
    SepDate extends string = '/', 
    SepTime extends string = ':'
> = `${DateFormats<SepDate>} ${TimeFormats<SepTime>}`;
```