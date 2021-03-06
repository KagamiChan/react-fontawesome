import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { Props as IconProps } from '@fortawesome/react-fontawesome';
import { SFC } from 'react';
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
    v5?: boolean;
    icon?: IconProps['icon'] | IconDefinition;
}
export declare type Props = IFontAwesomeExtraProps & Omit<IconProps, 'icon'> & IFontAwesomeProps;
export declare const isV4: ({ icon, name, tag, v5, fas, far, fal, fab, }: Props) => boolean;
declare const ReactFontawesome: SFC<Props>;
export default ReactFontawesome;
