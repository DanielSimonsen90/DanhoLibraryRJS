/**
 * Redirect client to url
 * @returns Function to redirect client to new provided url
 */
export declare function useRedirect(): (to: string | ((from: string) => string)) => string;
export default useRedirect;
