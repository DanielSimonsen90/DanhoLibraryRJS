import { TimeDelay } from 'danholibraryjs';
/**
 * Adds className to element matching query, and if baseTime provided, removes className after baseTime
 * @param query Query to get element
 * @param className Class to add
 * @param baseTime Base time to wait until className is removed. If left undefined, class will not be removed
 */
export declare function useAnimationReverse(query: string, className: string, baseTime?: TimeDelay): (time?: TimeDelay | undefined) => Promise<HTMLElement>;
export default useAnimationReverse;
