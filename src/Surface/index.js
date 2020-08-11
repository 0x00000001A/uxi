import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'
import './styles.scss'
import UxiRipple from '../Ripple'

const withoutComponentProps = (originalProps, propsToRemove) => {
  const newProps = Object.assign({}, originalProps)

  propsToRemove.forEach((propName) => {
    delete newProps[propName]
  })

  return newProps
}

export const config = {
  className: 'uxi-surface',
  elevations: Array.from(
    Array(25), (x, i) => i
  )
}

export const uxiBuildClassName = (definition) => {
  return clsx([
    definition.base,
    definition.modifiers.map(({ name, value = '', condition = true }) => {
      return condition && `${definition.base}_${[name, value].filter(Boolean).join('-')}`
    })
  ])
}

const UxiSurface = (props) => {
  const className = uxiBuildClassName({
    base: config.className,
    modifiers: [{
      name: 'elevation',
      value: props.elevation,
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
