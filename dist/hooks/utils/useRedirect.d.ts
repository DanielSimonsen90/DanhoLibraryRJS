/**
 * Redirects client to new url
 * @param to New url
 */
export declare function useRedirect(): (to: string | ((from: string) => string)) => void;
export default useRedirect;
