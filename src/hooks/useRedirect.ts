/**
 * Redirects client to new url
 * @param to New url
 */
export function useRedirect() {
    return (to: string) => window.location.pathname = to;
}
export default useRedirect;