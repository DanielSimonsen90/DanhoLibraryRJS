# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [State](./index.md) / useStack
useState that stores a stack object

## [Module](../../../src/hooks/state/useStack.ts)
```ts
export type PushState<State> = (state: State) => number;
export type ToVoid = () => void;
export type UseStateStackReturn<State> = {
    value?: State, 
    push: PushState<State>, 
    pop: ToVoid,
    clear: ToVoid,
    size: number
}
export type StackOptions = HistoryOptions;

/**
 * Simple stack object
 * @param initialValue Initial stack value
 * @param options Options which atm is only capacity
 * @returns Stack properties
 */
export function useStack<State>(initialValue?: State, options?: StackOptions): UseStateStackReturn<State>;
```

## Example
```tsx
type ModalContext = {
    modal: JSX.Element;
    push(modal: JSX.Element): void;
    pop(): void;
    clear(): void;
}
const ModalContext = createContext<(null);
export const useModal = () => useContext(ModalContext);

function ModalProvider({ children }) {
    const { value: modal, push, pop, clear } = useStack(null);

    return (
        <ModalContext.Provider value={{ modal, push, pop, clear }}>
            {modal}
            {children}
        </ModalContext.Provider>
    )
}
```