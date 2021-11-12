import React, { useEffect, useRef } from "react"
import useRenderCount from "./useRenderCount"

type useDebugInformationReturn = {
    /** Times component as rendered */
    timesRendered: number;
    /** Any props that have changed */
    changedProps: {},
    /** How long ago since last render */
    timeSinceLastRender: number;
    /** Timestamp on last render */
    lastRenderTimestamp: number;
}

/**
 * Debug component in details
 * @param componentName Name of the component to debug
 * @param props Component props
 * @param prefix Preferred console.log prefix
 * @returns Debug information
 */
export function useDebugInformation(componentName: string, props: any, prefix = "[debug-info]"): useDebugInformationReturn {
    const timesRendered = useRenderCount();
    const changedProps = useRef({});
    const previousProps = useRef(props);
    const lastRenderTimestamp = useRef(Date.now());

    const propKeys = Object.keys({ ...props, ...previousProps });
    changedProps.current = propKeys.reduce((obj, key) => {
        if (props[key] === previousProps.current[key]) return obj;

        return {
            ...obj,
            [key]: { previous: previousProps.current[key], current: props[key] },
        }
    }, {});
    const info = {
        timesRendered,
        changedProps: changedProps.current,
        timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
        lastRenderTimestamp: lastRenderTimestamp.current,
    }

    useEffect(() => {
        previousProps.current = props;
        lastRenderTimestamp.current = Date.now();
        console.log(prefix, componentName, info);
    });

    return info;
}
export default useDebugInformation;