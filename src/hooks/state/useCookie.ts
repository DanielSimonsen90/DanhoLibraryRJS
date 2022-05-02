import { useState, useCallback } from "react"
import Cookies, { CookieAttributes } from "js-cookie"

type Cookie = string | Record<string, string>
type CookieOptions = CookieAttributes | undefined;
type UpdateCookies<T> = (newValue: T, options?: CookieOptions) => void;
type DeleteCookies = () => void;
type useCookieReturn<T extends Cookie> = [value: T, updateCookie: UpdateCookies<T>, deleteCookie: DeleteCookies]

/**
 * Easy way to manage cookies
 * @param name Name of the cookie
 * @param defaultValue Default value, if cookie wasn't found
 */
export function useCookie<T extends Cookie>(name: string, defaultValue: T): useCookieReturn<T> {
    const [value, setValue] = useState<T>(() => {
        const cookie = Cookies.get(name);
        if (cookie) return cookie as T;
        Cookies.set(name, defaultValue);
        return defaultValue;
    })

    const updateCookie = useCallback<UpdateCookies<T>>((newValue, options) => {
        Cookies.set(name, newValue, options); 
        setValue(newValue);
    }, [name]);

    const deleteCookie = useCallback<DeleteCookies>(() => {
        Cookies.remove(name);
        setValue(null as any);
    }, [name]);

    return [value, updateCookie, deleteCookie];
}
export default useCookie;