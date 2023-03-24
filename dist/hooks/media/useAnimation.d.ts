import { TimeDelay } from 'danholibraryjs';
type AdditionalData = {
    time?: TimeDelay;
    className?: string;
};
/**
 * Adds className to element matching query, and if baseTime provided, removes className after baseTime
 * @param query Query to get element
 * @param className Class to add
 * @param baseTime Base time to wait until className is removed. If left undefined, class will not be removed
 */
export declare function useAnimation(query: string, className: string, baseTime?: TimeDelay): ({ time, className: additionalClassName }?: AdditionalData) => Promise<HTMLElement>;
export default useAnimation;
