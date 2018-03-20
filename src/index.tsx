import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, Props as IconProps } from '@fortawesome/react-fontawesome'
import React, { SFC } from 'react'
import { FontAwesomeProps } from 'react-fontawesome'

export type Props = FontAwesomeProps & IconProps & {
  fal?: boolean,
  far?: boolean,
  fab?: boolean,
  fas?: boolean,
  fa?: boolean,
}

const ReactFontawesome: SFC<Props> = (props: Props) => {
  const { name } = props
  return (
    <FontAwesomeIcon
      icon={name as IconProp}
    />
  )
}

ReactFontawesome.displayName = 'ReactFontawesome'

ReactFontawesome.propTypes = {
  ...FontAwesomeIcon.propTypes,
}

export default ReactFontawesome
