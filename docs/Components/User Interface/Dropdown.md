# [DanhoLibraryRJS](../../index.md) / [Components](../index.md) / [User Interface](./index.md) / Dropdown
Renders \<ul className="dropdown"> with \<li className="dropdown-item"> as children, provided by props.items. When \<li> is clicked, emits props.onItemSelected(item: T): void

## [Module](../../../src/components/Dropdown.tsx)
```tsx
type DropdownProps<T extends { toString(): string }> = {
    items: Array<T>;
    onItemSelected(item: T): void;
}

function Dropdown<T extends { toString(): string }>(props: DropdownProps): React.FunctionComponent<DropdownProps>