import { RefObject } from "react";
import { Callback } from "../../utils";
declare type LongPressOptions = {
    /**
     * Delay in ms
     * @default 250
     */
    delay: number;
};
/**
 * Practically adds onLongPress event to reference element
 * @param ref Reference HTML element
 * @param onLongPress onLongPress callback
 * @param options Options
 */
export declare function useLongPress<T extends HTMLElement>(ref: RefObject<T>, onLongPress: Callback, { delay }?: LongPressOptions): void;
export default useLongPress;
