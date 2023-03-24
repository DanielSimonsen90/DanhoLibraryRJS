import { CookieAttributes } from "js-cookie";
type Cookie = string | Record<string, string>;
type CookieOptions = CookieAttributes | undefined;
type UpdateCookies<T> = (newValue: T, options?: CookieOptions) => void;
type DeleteCookies = () => void;
type useCookieReturn<T extends Cookie> = [value: T, updateCookie: UpdateCookies<T>, deleteCookie: DeleteCookies];
/**
 * Easy way to manage cookies
 * @param name Name of the cookie
 * @param defaultValue Default value, if cookie wasn't found
 */
export declare function useCookie<T extends Cookie>(name: string, defaultValue: T): useCookieReturn<T>;
export default useCookie;
