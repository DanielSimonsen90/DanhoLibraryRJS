import { useCallback } from "react"
import { Callback } from "../utils/BaseReact";

/**
 * useCallback but it only runs once
 * @param callback Callback to run once
 */
export const useCallbackOnce = <T extends Callback>(callback: T) => useCallback(callback, []);
export default useCallbackOnce;