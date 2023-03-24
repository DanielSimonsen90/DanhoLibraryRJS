/// <reference types="react" />
type Stringable = {
    toString(): string;
};
type Props<T extends Stringable> = {
    items: Array<T>;
    onItemSelected: (item: T) => void;
};
export { Props as DropdownProps };
export declare function Dropdown<T extends Stringable>({ items, onItemSelected }: Props<T>): JSX.Element;
export default Dropdown;
