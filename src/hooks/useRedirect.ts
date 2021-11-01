/**
 * Redirects client to new url
 * @param to New url
 */
export default function useRedirect(to: string) {
    return window.location.pathname = to;
}