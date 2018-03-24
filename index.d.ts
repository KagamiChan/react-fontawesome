/// <reference types="react" />
import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { Props as IconProps } from '@fortawesome/react-fontawesome';
import { SFC } from 'react';
export declare type Diff<T extends string, U extends string> = ({
    [P in T]: P;
} & {
    [P in U]: never;
} & {
    [x: string]: never;
})[T];
export declare type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
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
    icon?: IconProps['icon'];
}
export declare type Props = IFontAwesomeExtraProps & Omit<IconProps, 'icon'> & IFontAwesomeProps;
export declare const isV4: ({ icon, name, tag, fa, fas, far, fal, fab, }: Props) => boolean;
declare const ReactFontawesome: SFC<Props>;
export default ReactFontawesome;
