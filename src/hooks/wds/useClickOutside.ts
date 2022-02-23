import useEventListener from './useEventListener';

function includesChild(parent: Node, target: Node | null) {
    if (!target) return true
    if (parent.hasChildNodes() && [...parent.childNodes.values()].some(child => includesChild(child, target))) return true;
    return parent.contains(target);
}

/**
 * Client clicked outside of reference element - very cool for modals
 * @param query Query to get element
 * @param onClickOutside Click event, if clicked outside
 */
export function useClickOutside(query: string, onClickOutside: (event: MouseEvent, element: HTMLElement) => void) {
    return useEventListener("click", e => { 
        const el = document.querySelector<HTMLElement>(query);
        if (el == null || includesChild(el, e.target as Node)) return;
        
        console.log('Clicked outside', {
            el, e, target: e.target
        });
        
        onClickOutside(e, el)
    }, document);
}
export default useClickOutside;