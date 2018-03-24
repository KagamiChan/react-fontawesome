import {
  IconName,
  IconPrefix,
  IconProp,
  RotateProp,
} from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon,
  Props as IconProps,
} from '@fortawesome/react-fontawesome'
import React, { SFC } from 'react'
import shim from './shim'

/**
 * react-fontawesome's extra props
 */
export interface IFontAwesomeExtraProps {
  ariaLabel?: string
  cssModule?: any
  tag?: string
  rotate?: RotateProp
  name?: string
  stack?: any
}

/**
 * semantic props
 */
export interface IFontAwesomeProps {
  fal?: boolean
  far?: boolean
  fab?: boolean
  fas?: boolean
  fa?: boolean
  // ensure icon could be unset
  icon: IconProps['icon'] | undefined
}

export type Props = IFontAwesomeExtraProps & IconProps & IFontAwesomeProps

/**
 * Method to get the final names for font-awesome 5
 * @param fa
 * @param fas
 * @param far
 * @param fal
 * @param fab
 * @param name
 * @param {String} name Name of the icon to use
 * @returns {Array} [ type, prefixed name ]
 */
const getFaName = ({
  icon,
  name,
  tag,
  fa,
  fas,
  far,
  fal,
  fab,
}: Props): [IconPrefix, IconName] => {
  const finalName = (icon || name) as IconName
  if (fas) {
    return ['fas', finalName]
  }
  if (far) {
    return ['far', finalName]
  }
  if (fal) {
    return ['fal', finalName]
  }
  if (fab) {
    return ['fab', finalName]
  }
  // if no set is specified, check if it should be shimmed
  return shim(finalName)
}

const allFalsy = (values: any[]): boolean =>
  values.reduce((a, b) => a || b, false)

const isV4 = ({ icon, name, tag, fa, fas, far, fal, fab }: Props): boolean => {
  if (typeof icon !== 'string' && typeof name !== 'string') {
    return false
  }
  if (tag || fa) {
    return true
  }
  if (!allFalsy([fas, far, fal, fab])) {
    return false
  }
  if (icon && typeof icon !== 'string') {
    return false
  }
  return true
}

const ReactFontawesome: SFC<Props> = (props: Props) => {
  const {
    icon,
    // rotate is renamed rotation
    rotate,
    // below are props that will be omit
    cssModule,
    name,
    stack,
    tag,
    // semantic props
    fa,
    fas,
    far,
    fal,
    fab,
    // other props will be directly passed
    ...otherProps
  } = props

  const finalIcon: IconProp = isV4(props)
    ? getFaName(props)
    : (icon as IconProp)
  return <FontAwesomeIcon icon={finalIcon} rotation={rotate} {...otherProps} />
}

ReactFontawesome.displayName = 'ReactFontawesome'

export default ReactFontawesome
