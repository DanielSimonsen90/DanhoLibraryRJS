import React, { createRef, useEffect, useState } from 'react'
import BaseProps from "./BaseProps";
import { Children } from "./BaseReact";
import Container from './Container';

export type Dock = 'top' | 'bottom' | 'left' | 'right';
type Props = BaseProps & {
    dock: Dock,
    query: string,
    tooltip?: Children
}


export function Tooltip({ dock, query, tooltip, children, ...rest }: Props) {
    const [style, setStyle] = useState({});
    const [tooltipSize, settooltipSize] = useState({ height: 0, width: 0 });
    const [showing, setShowing] = useState(false);
    const selfRef = createRef<HTMLDivElement>();

    useEffect(() => {
        const tooltipFor = document.querySelector(query) as HTMLElement;
        const rect = tooltipFor.getClientRects()[0];
        const { top, bottom, left, right, width, height } = {
            top: Math.round(rect.top),
            bottom: Math.round(rect.bottom),
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
        };
        const newtooltipSize = {
            height: selfRef.current?.offsetHeight || height,
            width: selfRef.current?.offsetWidth || width
        }

        if (newtooltipSize.height == tooltipSize.height && 
            newtooltipSize.width == tooltipSize.width) 
        return;

        settooltipSize(newtooltipSize);
        setStyle(preStyle => ({ ...preStyle, ...(() => ({
            top: `${bottom - height / 2 - tooltipSize.height / 2}px`,
            left: `${right - width / 2 - tooltipSize.width / 2}px`,
            ...(() => {
                switch (dock) {
                    default: case 'top': return {
                        top: `calc(${top - tooltipSize.height}px - 2vh)`,
                        boxShadow: `0vw -.5vh .5vh #111`
                    }
                    case 'bottom': return {
                        top: `calc(${bottom}px + 2vh)`,
                        boxShadow: `0vw .5vh .5vh #111`
                    };
                    case 'right': return {
                        left: `calc(${left + tooltipSize.width}px + 2vw)`,
                        boxShadow: `.25vw 0px .5vh #111`
                    };
                    case 'left': return {
                        left: `calc(${right - left}px - 2vw)`,
                        boxShadow: `-.25vw 0px .5vh #111`
                    };
                }
            })()
        }) ) }) );

        tooltipFor.onmouseenter = () => setShowing(true);
        tooltipFor.onmouseleave = () => setShowing(false);
    }, [dock, query, selfRef, tooltip, tooltipSize.height, tooltipSize.width]);

    if (!showing) return null;

    return (
        <div className="tooltip" style={style} {...rest} ref={selfRef}>
            <Container style={{ backgroundColor: 'unset', border: 'unset' }}>
                {children || tooltip}
            </Container>
        </div>
    )
}
export default Tooltip;