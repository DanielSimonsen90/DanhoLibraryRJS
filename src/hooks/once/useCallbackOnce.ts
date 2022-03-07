import { useCallback } from "react"

/**
 * useCallback but it only runs once
 * @param callback Callback to run once
 */
export const useCallbackOnce = <T extends (...args: any[]) => void>(callback: T) => useCallback(callback, []);
export default useCallbackOnce;