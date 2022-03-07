import { useState } from "react"
import useEventListener from "../events/useEventListener";

/**
 * Client is online/offline on internet
 */
export function useOnlineStatus() {
    const [online, setOnline] = useState(navigator.onLine);

    useEventListener("online", () => setOnline(navigator.onLine));
    useEventListener("offline", () => setOnline(navigator.onLine));

    return online;
}
export default useOnlineStatus;