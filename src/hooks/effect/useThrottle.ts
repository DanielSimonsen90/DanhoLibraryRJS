import { useCallback, useState } from "react";
import { Callback } from "../../utils";

export function useThrottle(callback: Callback, timeout: number): Callback {
    const [throttled, setThrottled] = useState(false);
    const throttledCallback = useCallback<Callback>(
        (...args: any[]) => {
            if (!throttled) {
                callback(...args);
                setThrottled(true);
                setTimeout(() => setThrottled(false), timeout);
            }
        },
        [callback, timeout, throttled]
    );
    return throttledCallback;
}