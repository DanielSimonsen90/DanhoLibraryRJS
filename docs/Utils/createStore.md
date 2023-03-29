# [DanhoLibraryRJS](../index.md) / [Utils](./index.md) / createStore
zustand inspired store creation - but not using zustand :>

## [Module](../../src/utils/createStore.ts)
```ts
type BaseAction<State, Returns = State> = (
  & {
    [Property in keyof State as `set${Capitalize<Property>}`]?: (value: State[Property]) => Returns 
  }
  & Record<string, ((...args: any[]) => Returns) | ((property: keyof State) => Returns)>
  & Record<'setState', (state: State) => Returns>
);

type Setter<State extends {}> = (value: SetStateAction<State>) => State;
type ActionsPicker<State extends {}> = (set: Setter<State>) => Parial<State>>;

export function createStore<
  State extends {},
  Store extends State & Required<BaseAction<State, void>>
>(state: State, actionsPicker?: ActionsPicker<State>): {
  (): Store;
  <T>(pick: (store: Store) => T): T;
  <Picked extends keyof Store>(pick: Picked): Store[Picked];
  <PickedArray extends Array<keyof Store>>(...pick: PickedArray): {
    [Index in keyof PickedArray]: Store[PickedArray[Index]]
  };
}

export default createStore;
```