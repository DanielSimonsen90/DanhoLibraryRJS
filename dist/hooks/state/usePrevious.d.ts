/**
 * useState but it stores the previous value of the state
 * @param value Current state value
 * @returns Previous state value
 */
export declare function usePrevious<T>(value: T): T | undefined;
export default usePrevious;
