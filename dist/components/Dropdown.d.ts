/// <reference types="react" />
declare type Stringable = {
    toString(): string;
};
declare type Props<T extends Stringable> = {
    items: Array<T>;
    onItemSelected: (item: T) => void;
};
export { Props as DropdownProps };
export declare function Dropdown<T extends Stringable>({ items, onItemSelected }: Props<T>): JSX.Element;
export default Dropdown;
