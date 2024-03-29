import { useState, useCallback } from "react";
import Cookies, { CookieAttributes } from "js-cookie";

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
export function useCookie<T extends Cookie>(name: string, defaultValue: T): useCookieReturn<T> {
    const getStringValue = useCallback((v: T) => typeof v === "string" ? v : JSON.stringify(v), []);
    const [value, setValue] = useState<T>(() => {
        const cookie = Cookies.get(name);
        if (cookie) {
            try { return JSON.parse(cookie); }
            catch { return cookie; }
        }

        const value = getStringValue(defaultValue);
        Cookies.set(name, value);
        return defaultValue;
    });


    const updateCookie = useCallback<UpdateCookies<T>>((newValue, options) => {
        Cookies.set(name, getStringValue(newValue), options);
        setValue(newValue);
    }, [name]);

    const deleteCookie = useCallback<DeleteCookies>(() => {
        Cookies.remove(name);
        setValue(null as any);
    }, [name]);

    return [value, updateCookie, deleteCookie];
}
export default useCookie;