/**
 * injects react-fontawesome by overriding its render method
 * since React Native is not supported by official component, jsx is transpiled to react
 * @example import '@skagami/react-fontawesome/inject'
 */

import FAIcon from '@fortawesome/react-fontawesome'
import React from 'react'
import FA from 'react-fontawesome'
import getShimFaName from './shim'

// redefine props typecheck since we manupulate on prototype
interface IProps {
  ariaLabel?: string
  border?: boolean
  cssModule?: any
  fixedWidth?: boolean
  flip?: FA.FontAwesomeFlip
  inverse?: boolean
  name: string
  pulse?: boolean
  rotate?: number
  size?: FA.FontAwesomeSize
  spin?: boolean
  stack?: FA.FontAwesomeStack
  tag?: string
}

FA.prototype.render = function(this: React.Component<IProps & FA.FontAwesomeProps>) {
  const { name, children, ...props } = this.props
  return <FAIcon icon={getShimFaName(name)} {...props} />
}
