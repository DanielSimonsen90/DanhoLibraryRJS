# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [State](index.md) / useCookie
Receive and store values in client cookies.

## [Module](../../../src/hooks/state/useCookie.ts)
```ts
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
export function useCookie<T extends Cookie>(name: string, defaultValue: T): useCookieReturn<T>;
export default useCookie;
```

## Example
```tsx
function Shop(props) {
    const [orderStored, updateOrderStored, deleteOrderStored] = useCookie("order", []);
    // Custom hook from Hooks/State/useArrayState
    const { value: items, push, update, remove, findIndex } = useArrayState(orderStored);

    useEffect(() => {
        items.length ?
            updateOrderStored(items, {
                expires: new Date().setHours(new Date().getHours() + 1)
            }) : 
            deleteOrderStored();
    }, [items]);

    return (
        <Basket onItemUpdate={item => {
            const index = findIndex(o => o.id === item.id);
            if (index > -1) update(index, item);
        }} onItemDelete={remove}>
        <Menu onItemSelected={push} />
        <Button importance="primary" crud="create" iconName="cart" onClick={() => props.onOrderCompleted(ordersStored)}>Order</Button>
    );
}
```