# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Debug](./index.md) / useDebugInformation
Basic debugging information from a component

## References
* Hooks
    * [useRenderCount](./useRenderCount.md)

## [Module](../../../src/hooks/debug/useDebugInformation.ts)
```ts
type useDebugInformationReturn = {
    /** Times component as rendered */
    timesRendered: number;
    /** Any props that have changed */
    changedProps: {},
    /** How long ago since last render */
    timeSinceLastRender: TimeSpan;
    /** Timestamp on last render */
    lastRenderTimestamp: number;
}

/**
 * Debug component in details
 * @param componentName Name of the component to debug
 * @param props Component props
 * @param prefix Preferred console.log prefix. Default = "[debug-info]"
 * @returns Debug information
 */
export function useDebugInformation(componentName: string, props: any, prefix = "[debug-info]"): useDebugInformationReturn;
export default useDebugInformation;
```