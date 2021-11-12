import { RefObject } from "react";
declare type OnLongPress = () => void;
declare type LongPressOptions = {
    /** Delay in ms */
    delay: number;
};
/**
 * Practically adds onLongPress event to reference element
 * @param ref Reference HTML element
 * @param onLongPress onLongPress callback
 * @param options Options
 */
export declare function useLongPress<T extends HTMLElement>(ref: RefObject<T>, onLongPress: OnLongPress, { delay }?: LongPressOptions): void;
export default useLongPress;
