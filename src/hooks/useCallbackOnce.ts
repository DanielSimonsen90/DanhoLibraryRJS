import { useCallback } from "react"

/**
 * useCallback but it only runs once
 * @param callback Callback to run once
 */
const useCallbackOnce = <T extends ClassicFunction>(callback: T) => useCallback(callback, []);
export default useCallbackOnce;