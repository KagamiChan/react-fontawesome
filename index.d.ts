/// <reference types="react" />
import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { Props as IconProps } from '@fortawesome/react-fontawesome';
import { SFC } from 'react';
/**
 * react-fontawesome's extra props
 */
export interface IFontAwesomeExtraProps {
    ariaLabel?: string;
    cssModule?: any;
    tag?: string;
    rotate?: RotateProp;
    name?: string;
    stack?: any;
}
/**
 * semantic props
 */
export interface IFontAwesomeProps {
    fal?: boolean;
    far?: boolean;
    fab?: boolean;
    fas?: boolean;
    fa?: boolean;
    icon: IconProps['icon'] | undefined;
}
export declare type Props = IFontAwesomeExtraProps & IconProps & IFontAwesomeProps;
export declare const isV4: ({ icon, name, tag, fa, fas, far, fal, fab, }: Props) => boolean;
declare const ReactFontawesome: SFC<Props>;
export default ReactFontawesome;
