declare type AllEvents<EventType extends keyof WindowEventMap> = WindowEventMap[EventType];
declare type Listener<T, U> = (event: T, element: U) => void;
/**
 * Add event listener to element
 * @param eventType Type of event to add a listener to
 * @param callback Listener callback
 * @param element Element to append listener to. Default is window
 */
export declare function useEventListener<EventType extends keyof WindowEventMap, ElementTarget extends EventTarget = EventTarget, EventTypeEvent = AllEvents<EventType>>(eventType: EventType, callback: Listener<EventTypeEvent, ElementTarget>, element?: ElementTarget): {
    addEventListener: () => void;
    removeEventListener: () => void;
};
export default useEventListener;
