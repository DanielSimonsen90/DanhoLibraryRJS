# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Events](index.md) / useLongPress

## References
* [Hooks](../index.md)
    * [useEventListener](./useEventListener.md)
    * [useEffectOnce](../Once/useEffectOnce.md)
    * [useTimeout](../Utils/useTimeout.md)

## [Module](../../../src/hooks/events/useLongPress.ts)
```ts
type LongPressOptions = {
    /** 
     * Delay in ms 
     * @default 250
     */
    delay: number;
}

/**
 * Practically adds onLongPress event to reference element
 * @param ref Reference HTML element
 * @param onLongPress onLongPress callback
 * @param options Options
 */
export function useLongPress<T extends HTMLElement>(
    ref: RefObject<T>, 
    onLongPress: Callback, 
    options: LongPressOptions = defaultOptions
): void;
```