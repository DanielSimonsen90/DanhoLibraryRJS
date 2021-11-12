import useEventListener from "./useEventListener"
import useTimeout from "./useTimeout"
import useEffectOnce from "./useEffectOnce"
import { RefObject } from "react"

type OnLongPress = () => void;
type LongPressOptions = {
    /** Delay in ms */
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
export function useLongPress<T extends HTMLElement>(ref: RefObject<T>, onLongPress: OnLongPress, { delay }: LongPressOptions = defaultOptions) {
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