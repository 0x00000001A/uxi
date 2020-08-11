import React, { useContext, createContext } from 'react'
import colors from '../references/colors'

const defaultTheme = {
  colors: {
    black: colors.black,
    white: colors.white,
    primary: '#6200ee',
    primaryDark: '#3700b3',
    secondary: '#03dac6',
    secondaryDark: '#03dac6',
    error: '#b00020',
    surface: colors.white,
    background: colors.white
  },
  font: {
    size: 16,
    weight: {
      lighter: 100,
      normal: 400,
      medium: 500
    }
  }
}

const ThemeContext = createContext(defaultTheme)

export const ThemeProvider = (props) => {
  const theme = props.theme || defaultTheme
  const children = props.children

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
