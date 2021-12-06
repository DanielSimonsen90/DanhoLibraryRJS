import React from 'react';
import BaseProps from '../utils/BaseProps';
export declare type PortalType = 'popout' | 'tooltip' | 'modal';
declare type Props = BaseProps & {
    type: PortalType;
};
export declare function Portal({ type, children, ...rest }: Props): React.ReactPortal | null;
export default Portal;
