import React from 'react'
import PropTypes from 'prop-types'

import { uxiBuildClassName, withoutComponentProps } from '../helpers'

import UxiRipple from '../Ripple'
import './styles.scss'

export const config = {
  className: 'uxi-surface',
  elevations: Array.from(
    Array(25), (x, i) => i
  )
}

const UxiSurface = (props) => {
  const className = uxiBuildClassName({
    base: config.className,
    modifiers: [{
      name: 'elevation',
      postfix: props.elevation,
      condition: props.elevation
    }, {
      name: 'action',
      condition: props.action
    }]
  })

  return React.createElement(
    props.tag,
    {
      ...withoutComponentProps(props, [
        'tag',
        'action',
        'children',
        'elevation'
      ]),
      tabIndex: props.action ? 0 : undefined,
      className
    },
    <React.Fragment>
      <div style={{ position: 'relative', zIndex: 2, color: '#fff' }}>
        {props.children}
      </div>
      <UxiRipple/>
    </React.Fragment>
  )
}

UxiSurface.propTypes = {
  tag: PropTypes.string.isRequired,
  action: PropTypes.bool,
  children: PropTypes.node.isRequired,
  elevation: PropTypes.oneOf(config.elevations)
}

UxiSurface.defaultProps = {
  tag: 'div',
  children: '',
  elevation: 'small',
}

export default UxiSurface
