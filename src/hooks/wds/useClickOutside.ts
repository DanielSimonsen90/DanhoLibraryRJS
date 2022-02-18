import useEventListener from './useEventListener';

/**
 * Client clicked outside of reference element - very cool for modals
 * @param query Query to get element
 * @param onClickOutside Click event, if clicked outside
 */
export function useClickOutside(query: string, onClickOutside: (event: MouseEvent) => void) {
    return useEventListener("click", e => { 
        const el = document.querySelector(query);
        if (el == null || el.contains(e.target as Node)) return;
        
        onClickOutside(e)
    }, document);
}
export default useClickOutside;