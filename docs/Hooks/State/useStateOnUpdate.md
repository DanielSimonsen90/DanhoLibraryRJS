# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [State](index.md) / useStateUpdate

useState with a callback for before state is updated.

## [Module](../../../src/hooks/state/useStateUpdate.ts)

```ts
type Updates<State> = {
	/**
	 * Callback ran when dependencies have changed. Provided state is current state. Expects SetStateAction, aka State | (state) => State returned.
	 */
	before?: Callback<SetStateAction<State>, [state: State]>;
	/**
	 * Callback ran after state has changed. Value returned is used as clean-up for internal useEffect
	 */
	after?: Callback<void | Callback, [state: State]>;
};
export function useStateUpdate<State>(
	initialState: State | undefined,
	updates: Updates<State> = {
		before: s => s,
		after: () => {},
	},
	dependencies: DependencyList
): State;
```

## Example

```tsx
function TestComponent(props) {
	const isValid = useStateChange(false, {
		before(current) {
			const valid = testIfInputsAreValid();
			return valid;
		},
		after(valid) {
			console.log(`Inputs are ${valid ? 'invalid' : 'valid'}.`);
		},
	});
}
```
