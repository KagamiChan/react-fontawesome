/**
 * injects react-fontawesome by overriding its render method
 * since React Native is not supported by official component, jsx is transpiled to react
 * @example import '@skagami/react-fontawesome/inject'
 */

import FAIcon from '@fortawesome/react-fontawesome'
import React from 'react'
import FA from 'react-fontawesome'
import getShimFaName from './shim'

FA.prototype.render = function() {
  const { name, rotate: rotation, ...props } = this.props
  return <FAIcon icon={getShimFaName(name)} rotation={rotation} {...props} />
}
