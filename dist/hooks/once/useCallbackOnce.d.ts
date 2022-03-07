/**
 * useCallback but it only runs once
 * @param callback Callback to run once
 */
export declare const useCallbackOnce: <T extends (...args: any[]) => void>(callback: T) => T;
export default useCallbackOnce;
