import { useEffect, useRef } from "react";
type AllEvents<EventType extends keyof WindowEventMap> = WindowEventMap[EventType];
type Listener<T, U> = (event: T, element: U) => void;

/**
 * Add event listener to element
 * @param eventType Type of event to add a listener to
 * @param callback Listener callback
 * @param element Element to append listener to. Default is window
 */
export function useEventListener<
  EventType extends keyof WindowEventMap,
  ElementTarget extends EventTarget = EventTarget,
  EventTypeEvent = AllEvents<EventType>,
>(
  eventType: EventType,
  callback: Listener<EventTypeEvent, ElementTarget>,
  element?: ElementTarget | string,
  options?: boolean | AddEventListenerOptions
) {
  const callbackRef = useRef(callback);
  const target: ElementTarget = (!element ? window : typeof element === 'string' ? document.querySelector(element) : element) as ElementTarget;
  const handler: Listener<EventTypeEvent, ElementTarget> = (e: EventTypeEvent, element: ElementTarget) => callbackRef.current(e, element);

  useEffect(() => { callbackRef.current = callback; }, [callback]);

  const addEventListener = () => target.addEventListener(eventType, e => handler(e as any, target), options);
  const removeEventListener = () => target.removeEventListener(eventType, e => handler(e as any, target));

  useEffect(() => {
    if (target === null) return;
    addEventListener();
    return () => removeEventListener();
  }, [eventType, element, target]);

  return { addEventListener, removeEventListener };
}
export default useEventListener;