declare type useDebugInformationReturn = {
    /** Times component as rendered */
    timesRendered: number;
    /** Any props that have changed */
    changedProps: {};
    /** How long ago since last render */
    timeSinceLastRender: number;
    /** Timestamp on last render */
    lastRenderTimestamp: number;
};
/**
 * Debug component in details
 * @param componentName Name of the component to debug
 * @param props Component props
 * @param prefix Preferred console.log prefix
 * @returns Debug information
 */
export declare function useDebugInformation(componentName: string, props: any, prefix?: string): useDebugInformationReturn;
export default useDebugInformation;
