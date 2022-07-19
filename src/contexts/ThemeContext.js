import { createContext } from 'react'

const defaultState = {
  theme: 'dark',
  toggleTheme: () => {}
}

export const ThemeContext = createContext(defaultState)
