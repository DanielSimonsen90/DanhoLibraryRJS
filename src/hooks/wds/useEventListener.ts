import { Dispatch, useEffect, useRef } from "react"
type AllEvents<EventType extends keyof HTMLElementEventMap> = HTMLElementEventMap[EventType];
type Listener<T, U> = (event: T, element: U) => void;

/**
 * Add event listener to element
 * @param eventType Type of event to add a listener to
 * @param callback Listener callback
 * @param element Element to append listener to. Default is window
 */
export default function useEventListener<
    EventType extends keyof HTMLElementEventMap,
    ElementTarget extends EventTarget = EventTarget,
    EventTypeEvent = AllEvents<EventType>,
>(
    eventType: EventType, 
    callback: Listener<EventTypeEvent, ElementTarget>,
    element?: ElementTarget
) {
  element ?? window;
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (element == null) return
    const handler: Listener<EventTypeEvent, ElementTarget> = (e: EventTypeEvent, element: ElementTarget) => callbackRef.current(e, element)
    element.addEventListener(eventType, e => handler(e as any, element as ElementTarget))

    return () => element.removeEventListener(eventType, e => handler(e as any, element as ElementTarget))
  }, [eventType, element])
}