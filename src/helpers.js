import clsx from 'clsx'
import invariant from 'invariant'

/**
 *
 * @param definition
 * @param definition.base {string} base class
 * @param definition.element {string|object|array} base class
 * @param definition.modifiers {string|object.array} modifiers
 * @returns {string}
 */
export const uxiBuildClassName = ({ base, element = [], modifiers = [] }) => {
  invariant(base, 'Base class name is required')

  return clsx([
    clsx(base),
    clsx(element),
    modifiers.map(({ name, postfix = '', condition = true }) => {
      return condition && `${base}_${[name, postfix].filter(Boolean).join('-')}`
    })
  ])
}

export const withoutComponentProps = (originalProps, propsToRemove) => {
  const newProps = Object.assign({}, originalProps)

  propsToRemove.forEach((propName) => {
    delete newProps[propName]
  })

  return newProps
}
