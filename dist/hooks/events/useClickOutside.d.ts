import { ClickEvent } from '../../utils';
/**
 * Client clicked outside of reference element - very cool for modals
 * @param query Query to get element
 * @param onClickOutside Click event, if clicked outside
 */
export declare function useClickOutside(query: string, onClickOutside: (event: ClickEvent, element: HTMLElement) => void): {
    addEventListener: () => void;
    removeEventListener: () => void;
};
export default useClickOutside;
