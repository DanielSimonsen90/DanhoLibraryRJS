import { Callback } from "../../utils/BaseReact";
import { TimeoutDelay } from "../useSleep";
/**
 * Smarter version of setTimeout - provides clear() & reset() functions and doesn't get messed up due to re-renders
 * @param callback Callback to run, once timeout is done
 * @param delay Timeout delay - smart-string or millisecond value
 * @returns Object containing reset & clear methods
 */
export declare function useTimeout(callback: Callback, delay: TimeoutDelay): {
    reset: () => void;
    clear: () => void;
};
export default useTimeout;
