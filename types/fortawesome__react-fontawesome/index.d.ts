/**
 * this is @fortawesome/react-fontawesome type definitions from package's repo
 * @todo remove this file once official package with typings publish
 */

declare module '@fortawesome/react-fontawesome' {
  import { CSSProperties, SFC } from 'react'
  import {
    Transform,
    IconProp,
    FlipProp,
    SizeProp,
    PullProp,
    RotateProp,
    FaSymbol,
  } from '@fortawesome/fontawesome'

  const FontAwesomeIcon: SFC<Props>

  export default FontAwesomeIcon

  export interface Props {
    icon: IconProp
    mask?: IconProp
    className?: string
    spin?: boolean
    pulse?: boolean
    border?: boolean
    fixedWidth?: boolean
    inverse?: boolean
    listItem?: boolean
    flip?: FlipProp
    size?: SizeProp
    pull?: PullProp
    rotate?: RotateProp
    transform?: string | Transform
    symbol?: FaSymbol
    style?: CSSProperties
  }
}
