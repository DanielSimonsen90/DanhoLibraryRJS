# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [State](./index.md) / useArrayState
useState that supports array modification.

## [Module](../../../src/hooks/state/useArrayState.ts)
```ts
type FilterCallback<T> = (value: T, index: number, array: Array<T>) => boolean
type ArrayModifies<T> = Record<'clear' | 'shift' | 'pop', () => void> & {
  push(item: T): void,
  update(index: number, item: T): void,
  filter(callback: FilterCallback<T>): void,
  remove(i: number | T): T | undefined,
}
export type UseArrayReturn<T> = { 
    value: Array<T>,
    set: Dispatch<SetStateAction<Array<T>>>;
  } & 
  ArrayModifies<T> &
  Pick<Omit<Array<T>, keyof ArrayModifies<T>>, 
    'find' | 'some' | 'includes' | 'every' | 'random' |
    'reduce' | 'map' | 'forEach' |
    'findIndex' | 'indexOf' | 'index' | 'lastIndexOf' |
    'keys' | 'values' | 'join' |
    'length'
  >;

/**
 * Manages array states
 * @param defaultValue Default array
 * @returns Array, along with methods to modify array
 */
export function useArrayState<Item>(defaultValue?: Array<Item>): UseArrayReturn<Item>;
export default useArrayState;
```

## Example
```tsx
function TodoList(props) {
    const { value: todos, push, update, remove, clear, findIndex } = useArrayState([]);
//  const todos = useArrayState([]); // Can also be used instead of destructuring everything, however remember to use "todos.value" for looping through items

    // Imaginary hook to make a modal for a new todo
    const [modal, showModal] = useTodoModal({
        onSubmit(todo) {
            const index = findIndex(t => t.id === todo.id);
            if (index > -1) update(index, todo);
            else push(todo);
        }
    });

    return (
        <>
            {showModal && modal}
            <section>
                <div className="button-container">
                    <Button importance="primary" crud="create" onClick={showModal}>New</Button>
                    <Button importance="tertiary" crud="delete" onClick={clear}>Clear</Button>
                </div>
                {todos.map(todo => (
                    <article className={todo.completed ? 'completed' : 'todo'}>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <div className='button-container'>
                            <Button importance="secondary" crud="delete" onClick={() => remove(todo)}>Delete</Button>
                            <Button importance="primary" crud="update" onClick={() => showModal(todo)}>Update</Button>
                        </div>
                    </artic>
                ))}
            </section>
        </>
    )
}
```