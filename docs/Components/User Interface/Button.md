# [DanhoLibraryRJS](../../index.md) / [Components](../index.md) / [User Interface](./index.md) / Button

The button component is a basic button but with custom attributes provided by the component's props.

## References
* [Utils](../../Utils/index.md)
    * [BaseProps](../../Utils/Base/Props.md)

## [Module](../../../src/components/Button.tsx)
```tsx
export type CRUD = 'create' | 'read' | 'update' | 'delete';
export type Importance = 'primary' | 'secondary' | 'tertiary';
export type ButtonProps = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onClick'>> & {
    /**
     * Modifies color of importance
     */
    crud?: CRUD;
    /**
     * Custom icon from react-fontawesome
     */
    iconName?: string;
    /**
     * Modifies background-color or border-color style
     */
    importance?: Importance;
    /**
     * Hide icon provided by iconName or CRUD type
     * @default false
    */
    hideIcon?: boolean;

    /**
     * Button text instead of children
     */
    value?: string

    /**
     * Click or Enter/NumpadEnter button pressed
     * @param event The event associated
    */
    onClick(event: ClickEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>): void
}

function Button(props: ButtonProps): React.FunctionComponent<ButtonProps>