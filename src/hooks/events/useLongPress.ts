import { RefObject } from "react"
import { Callback } from "../../utils";
import useEffectOnce from "../once/useEffectOnce"
import useTimeout from "../utils/useTimeout";
import useEventListener from "./useEventListener"

type LongPressOptions = {
    /** 
     * Delay in ms 
     * @default 250
     */
    delay: number;
}
const defaultOptions = {
    delay: 250
}

/**
 * Practically adds onLongPress event to reference element
 * @param ref Reference HTML element
 * @param onLongPress onLongPress callback
 * @param options Options
 */
export function useLongPress<T extends HTMLElement>(ref: RefObject<T>, onLongPress: Callback, { delay }: LongPressOptions = defaultOptions) {
    if (!ref.current) throw Error("No reference element!");

  const { reset, clear } = useTimeout(onLongPress, delay);
  useEffectOnce(clear);

  useEventListener("mousedown", reset, ref.current);
  useEventListener("touchstart", reset, ref.current);

  useEventListener("mouseup", clear, ref.current);
  useEventListener("mouseleave", clear, ref.current);
  useEventListener("touchend", clear, ref.current);
}
export default useLongPress;