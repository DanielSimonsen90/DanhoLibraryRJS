import { CookieAttributes } from "js-cookie";
declare type Cookie = string | object;
declare type CookieOptions = CookieAttributes | undefined;
declare type updateCookies<T> = (newValue: T, options: CookieOptions) => void;
declare type deleteCookies = () => void;
declare type useCookieReturn<T extends Cookie> = [value: T, updateCookie: updateCookies<T>, deleteCookie: deleteCookies];
/**
 * Easy way to manage cookies
 * @param name Name of the cookie
 * @param defaultValue Default value, if cookie wasn't found
 */
export declare function useCookie<T extends Cookie>(name: string, defaultValue: T): useCookieReturn<T>;
export default useCookie;
