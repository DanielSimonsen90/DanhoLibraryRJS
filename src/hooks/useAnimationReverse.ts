import { ms, TimeDelay } from 'danholibraryjs'
import useMediaQuery from './wds/useMediaQuery';

/**
 * Adds className to element matching query, and if baseTime provided, removes className after baseTime
 * @param query Query to get element
 * @param className Class to add 
 * @param baseTime Base time to wait until className is removed. If left undefined, class will not be removed 
 */
export function useAnimationReverse(query: string, className: string, baseTime?: TimeDelay) {
    const allowAnimations = useMediaQuery('prefers-reduced-motion: no-preference');

    return (time?: TimeDelay) => {
        const el = document.querySelector<HTMLElement>(query);
        if (!el) throw new Error(`Invalid query: ${query}`);

        el.classList.add(className.replace('.', ''));
        return new Promise<HTMLElement>((resolve, reject) => {
            try {
                if (!time && !baseTime) return resolve(el);
                
                setTimeout(() => {
                    el.classList.remove(className.replace('.', ''));
                    resolve(el);
                }, allowAnimations ? ms(time || baseTime!) : 0);
            } catch (err) { reject(err); }
        })
    }
}
export default useAnimationReverse;