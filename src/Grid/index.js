import React from 'react'
import PropTypes from 'prop-types'
import { uxiBuildClassName } from '../helpers'
import './styles.scss'

const baseClassName = 'uxi-grid'

const UxiGrid = (props) => {
  const className = uxiBuildClassName({
    base: baseClassName,
    element: {
      row: props.isRow,
      column: props.isColumn,
      container: props.isContainer
    }
  })

  return (
    <div className={className}>{props.children}</div>
  )
}

UxiGrid.defaultProps = {
  isRow: false,
  isColumn: false,
  isContainer: false
}

UxiGrid.propTypes = {
  isRow: PropTypes.bool,
  isColumn: PropTypes.bool,
  isContainer: PropTypes.bool
}

export default UxiGrid
