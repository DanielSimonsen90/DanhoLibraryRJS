import { SetStateAction } from 'react';

type BaseAction<State, Returns = State> = (
    // @ts-ignore -- Infer keyof State as string
    & { [Property in keyof State as `set${Capitalize<Property>}`]?: (value: State[Property]) => Returns }
    & Record<string, ((...args: any[]) => Returns) | ((property: keyof State) => Returns)>
    & Record<'setState', (state: State) => Returns>
);

type Setter<State extends {}> = (value: SetStateAction<State>) => State;
type ActionsPicker<State extends {}> = (set: Setter<State>) => Partial<BaseAction<State>>;

export function createStore<
    State extends {},
    Store extends State & Required<BaseAction<State, void>>
>(
    state: State,
    actionsPicker?: ActionsPicker<State>
) {
    const actions = actionsPicker?.(value => state = value instanceof Function ? value(state) : value);
    const actionsReturnVoid = actions
        ? Object.entries(actions).reduce((result, [key, action]) => {
            result[key] = (...args: any[]) => { action(...args); };
            return result;
        }, {} as Record<string, Function>)
        : {};

    const store = {
        ...state,
        ...actionsReturnVoid,
    } as Store;

    class InternalStore {
        static useStore(): Store;
        static useStore<T>(pick: (store: Store) => T): T;
        static useStore<Picked extends keyof Store>(pick: Picked): Store[Picked];
        static useStore<PickedArray extends Array<keyof Store>>(...pick: PickedArray): { 
            [Index in keyof PickedArray]: Store[PickedArray[Index]] // Doesn't work because "Index" is typeof string and not number
        };
        static useStore<Picked extends keyof Store>(pick?: ((store: Store) => Partial<Store>) | Picked | Array<Picked>) {
            if (pick) {
                if (typeof pick === 'function') return pick(store);
                if (typeof pick === 'string') return store[pick];
                if (Array.isArray(pick)) return pick.map(property => store[property]);
            }
            return store;
        }
    }
    return InternalStore.useStore;
}

export default createStore;