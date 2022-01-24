import { useCallback, useEffect, useRef } from "react"
import { Callback } from "../../utils/BaseReact";
import { ms, TimeDelay } from "danholibraryjs";

/**
 * Smarter version of setTimeout - provides clear() & reset() functions and doesn't get messed up due to re-renders
 * @param callback Callback to run, once timeout is done
 * @param delay Timeout delay - smart-string or millisecond value
 * @returns Object containing reset & clear methods
 */
export function useTimeout(callback: Callback, delay: TimeDelay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => { callbackRef.current = callback }, [callback]);

  const set = useCallback(() => { timeoutRef.current = setTimeout(() => callbackRef.current(), ms(delay)); }, [delay]);
  /** Clears the timeout */
  const clear = useCallback(() => { timeoutRef.current && clearTimeout(timeoutRef.current) }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  /** Resets the timeout */
  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
export default useTimeout;