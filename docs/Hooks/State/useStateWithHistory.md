# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [State](index.md) / useStateWithHistory
useState but you can go back to the previous values.

## [Module](../../../src/hooks/state/useStateWithHistory.ts)
```ts
const DefaultCapacity = 10;
export type HistoryOptions = {
    /** @default 10 */
    capacity: number
}

type UseStateWithHistoryReturn<State> = [value: State, push: (value: State) => void, props: {
    history: UseArrayReturn<State>,
    /**
     * Internal pointer reference. Recommended not to use.
     */
    pointer: number,
    /**
     * Set value of the pointer reference. Preferred to use forward/go/backward instead.
     * @param value Number between 0 and capacity - 1.
     */
    setPointer(value: number): number,
    /**
     * Move pointer forward. Kinda like CTRL + Y
     */
    forward(by: number = 1): void, 
    /**
     * Go to specific history index.
     */
    go(index: number): void,
    /**
     * Move pointer backward. Kinda like CTRL + Z
     */
    back(by: number = 1): void, 
    /**
     * Remove provided history item or item at index.
     */
    remove(item: State | number): void,
    /**
     * Remove latest history item.
     */
    pop(): void
}]

/**
 * useState but you can go back to the previous values
 * @param defaultValue Default state value
 * @param options History options
 */
export function useStateWithHistory<State>(defaultValue: State, { capacity = DefaultCapacity }: HistoryOptions): UseStateWithHistoryReturn<State>;
export default useStateWithHistory;
```

## Example
```tsx

const MAX_ITEMS_PER_PAGE = 10;
function PaginatedList(props) {
    const data = useGetDataFromQuery(props.query);
    const [value, push, {
        history, pointer,
        back, go, forward
    }] = useStateWithHistory(data.reduce((arr, item, index) => {
        const shouldPush = index % MAX_ITEMS_PER_PAGE === 0;
        if (shouldPush) {
            arr.push([item]);
            return arr;
        }

        return [...arr.slice(0, -2), [...arr.slice(-1), item]];
    }, new Array()));

    // This return could've been made much smarter but I cba
    return (
        <div className='paginated-list'>
            <div className="results">
                {data.map(item => (
                    // Render item
                ))}
            </div>
            <div className="control-panel">
                <button onClick={back}>Back</button>
                <button onClick={go(0)}>0</button>

                <button onClick={() => back(3)}>{pointer - 3}</button>
                <button onClick={() => back(2))}>{pointer - 2}</button>
                <button onClick={back}>{pointer - 1}</button>

                <button disabled>{pointer}</button>

                <button onClick={forward}>{pointer + 1}</button>
                <button onClick={() => forward(2)}>{pointer + 2}</button>
                <button onClick={() => forward(3)}>{pointer + 3}</button>

                <button onClick={go(history.length)}>{history.length}</button>
                <button onClick={forward}>Forward</button>
            </div>
        </div>
    )
}
```