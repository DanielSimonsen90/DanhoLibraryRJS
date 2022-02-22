type Stringable = {
    toString(): string;
}
type Props<T extends Stringable> = {
    items: Array<T>
    onItemSelected: (item: T) => void
}

export { Props as DropdownProps };
export function Dropdown<T extends Stringable>({ items, onItemSelected }: Props<T>) {
    return (
        <ul className='dropdown'>
            {items.map(i => <li key={i.toString()} className='dropdown-item' onClick={() => onItemSelected(i)}>{i.toString()}</li>)}
        </ul>
    );
}
export default Dropdown;