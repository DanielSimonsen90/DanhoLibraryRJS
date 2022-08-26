import { MouseEventHandler, ReactElement, useMemo, useState } from 'react';
import { Arrayable } from 'danholibraryjs';
import { classNames } from '..';
import BaseProps from '../../utils/BaseProps';
import { TabBarItemProps } from './TabBarItem';
import { ClickEvent } from '../../utils';

type OnItemSelected = (event: OnItemSelectedEvent) => void;
export type OnItemSelectedEvent = ClickEvent<HTMLLIElement> & {
    previous: TabBarItemProps
    current: TabBarItemProps
}

export type TabBarProps = BaseProps<HTMLElement, false> & {
    data?: Map<string, TabBarItemProps>
    children?: Arrayable<ReactElement<TabBarItemProps>>
    onItemSelected?: OnItemSelected
}

export function TabBar({ onItemSelected, ...props }: TabBarProps) {
    const items = useMemo(() => {
        const propsChildren = props.children !== undefined && (Array.isArray(props.children) ? props.children : [props.children]);
        if (propsChildren === false && props.data) return props.data;
        else if (propsChildren === false) return new Map<string, TabBarItemProps>([
            ['Item', { 
                title: 'Item', 
                component: <h1>Please use the data property or give TabBar children!</h1> 
            }]
        ])

        return propsChildren.reduce((map, child) => {
            return map.set(child.props.title, child.props)
        }, new Map<string, TabBarItemProps>());
    }, [props.children]);
    const titles = useMemo(() => items.keyArr(), [items]);

    const [componentSelected, setComponentSelected] = useState(items.valueArr()[0]);

    const _onItemSelected: MouseEventHandler<HTMLLIElement> = (e) => {
        const item = items.get(e.currentTarget.textContent!)!;
        onItemSelected?.({ ...e,
            previous: componentSelected,
            current: item
        });
        setComponentSelected(item);
    }

    return (
        <section {...props} className={classNames('tab-bar-container', props.className)}>
            <header className="tab-bar">
                <ul>
                    {titles.map(title => <li key={title} className={
                        componentSelected.title === title ? 
                            'selected' : 
                            undefined
                        } onClick={_onItemSelected}>{title}</li>
                    )}
                </ul>
            </header>
            <hr />
            <section className="tab-bar-content">
                {typeof componentSelected.component === 'function' ? 
                    componentSelected.component() : 
                    componentSelected.component
                }
            </section>
        </section>
    );
}
export default TabBar;