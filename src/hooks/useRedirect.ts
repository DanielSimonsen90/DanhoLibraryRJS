/**
 * Redirects client to new url
 * @param to New url
 */
export function useRedirect() {
    return (to: string | ((from: string) => string)) => {
        window.location.pathname = typeof to === 'function' ? to(window.location.pathname) : to;
    }
}
export default useRedirect;