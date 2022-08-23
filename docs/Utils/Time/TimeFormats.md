# [DanhoLibraryRJS](../../../index.md) / [Utils](../index.md) / [Time](./index.md) / TimeFormats
Utility types to formatting time.

## [Module](../../../src/utils/Time/TimeFormats.ts)
```ts
export type HM<Seperator extends string = ':'> = `${Double}${Seperator}${Double}`;
export type HMS<Seperator extends string = ':'> = `${HM<Seperator>}${Seperator}${Double}`;
export type TimeFormats<Seperator extends string = ':'> = HM<Seperator> | HMS<Seperator>;
export default TimeFormats;
```