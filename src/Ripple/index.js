import React, { useCallback, useRef, useState } from 'react'
import './styles.scss'

const UxiRipple = (props) => {
  const uxiRippleElement = useRef(null)
  const [rippleSize, setRippleSize] = useState(0)
  const [mouseCoordinates, setMouseCoorinates] = useState({ x: 0, y: 0 })
  const [additionalClasslist, setAdditionalClassList] = useState('')

  const updateRippleDimensions = useCallback((...args) => {
    let event = args.find((arg) => arg.nativeEvent)
    event = event && event.nativeEvent

    if (event) {
      const targetRect = uxiRippleElement.current.getBoundingClientRect()
      const newRippleSize = Math.max(targetRect.width, targetRect.height)
      const newRippleSizeHalf = newRippleSize / 2
      const x = event.layerX - newRippleSizeHalf
      const y = event.layerY - newRippleSizeHalf
      setMouseCoorinates({ x, y })
      setRippleSize(newRippleSize)
    }
  }, [])

  const handleMouseKeyUp = useCallback((...args) => {
    setAdditionalClassList('uxi-ripple__circles-dissapearing')
  }, [])

  const handleMouseKeyDown = useCallback((...args) => {
    updateRippleDimensions(...args)
    setAdditionalClassList('uxi-ripple__circles-spreading')
  }, [updateRippleDimensions])

  return (
    <div
      ref={uxiRippleElement}
      onMouseDown={handleMouseKeyDown}
      onMouseUp={handleMouseKeyUp}
      key={null}
      className={'uxi-ripple'}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000'
      }}
    >
      <div
        className={'uxi-ripple__circles ' + additionalClasslist}
        style={{
          pointerEvents: 'none',
          left: mouseCoordinates.x,
          top: mouseCoordinates.y,
          width: rippleSize,
          height: rippleSize
        }}
      />
    </div>
  )
}

UxiRipple.defaultProps = {
}

export default UxiRipple
