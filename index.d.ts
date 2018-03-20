/// <reference types="react-fontawesome" />
/// <reference types="react" />
import { Props as IconProps } from '@fortawesome/react-fontawesome';
import { SFC } from 'react';
import { FontAwesomeProps } from 'react-fontawesome';
export declare type Props = FontAwesomeProps & IconProps & {
    fal?: boolean;
    far?: boolean;
    fab?: boolean;
    fas?: boolean;
    fa?: boolean;
};
declare const ReactFontawesome: SFC<Props>;
export default ReactFontawesome;
