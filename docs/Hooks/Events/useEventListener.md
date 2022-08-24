# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Events](./index.md) / useEventListener
Add an eventlistener to an element.

## [Module](../../../src/hooks/events/useEventListener.ts)
```ts
type AllEvents<EventType extends keyof WindowEventMap> = WindowEventMap[EventType];
type Listener<T, U> = (event: T, element: U) => void;

/**
 * Hook version of element.addEventListener. Resets every dependency change.
 * @param eventType The type of event to listen to
 * @param callback The function to run when event is emitted
 * @param element Optioan element to add the listener to. Default is window.
 * @param options Optional addEventListener options
 */
export function useEventListener<
    EventType extends keyof WindowEventMap,
    ElementTarget extends EventTarget = EventTarget,
    EventTypeEvent = AllEvents<EventType>,
>(
    eventType: EventType, 
    callback: Listener<EventTypeEvent, ElementTarget>,
    element?: ElementTarget | string,
    options? : boolean | AddEventListenerOptions
): {
    addEventListener(): void,
    removeEventListener(): void
}
```

## Example
```tsx
function TestComponent(props) {
    const [ready, setReady] = useState(false);
    useEventListener(
        'keypress',
        e => setReady(true),
        null, // defaults to window
        { once: true }
    );

    return (
        <h1>{ready ? "Let's get started!" : "Press any key to start."}</h1>
    )
}
```