import { Double } from ".";

export type HM<Seperator extends string = ':'> = `${Double}${Seperator}${Double}`;
export type HMS<Seperator extends string = ':'> = `${HM<Seperator>}${Seperator}${Double}`;
export type TimeFormats<Seperator extends string = ':'> = HM<Seperator> | HMS<Seperator>;
export default TimeFormats;