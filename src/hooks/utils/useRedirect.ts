/**
 * Redirect client to url
 * @returns Function to redirect client to new provided url
 */
export function useRedirect() {
    return (to: string | ((from: string) => string)) => (
        window.location.href = typeof to === 'function' ? 
            to(window.location.origin.substring(0)) : 
            `${window.location.origin}/${to}`
    );
}
export default useRedirect;