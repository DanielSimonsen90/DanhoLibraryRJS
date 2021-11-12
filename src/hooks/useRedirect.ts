/**
 * Redirects client to new url
 * @param to New url
 */
export function useRedirect(to: string) {
    return window.location.pathname = to;
}
export default useRedirect;