import { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { useLocalStorage } from '../hooks'
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../DesignSystem'
import { ThemeContext } from '../contexts'
import PropTypes from 'prop-types'

export const ThemeProviderCustom = ({ children }) => {
  const { uploadToLS, getFromLS } = useLocalStorage()
  const [theme, setTheme] = useState(getFromLS('theme') || 'light')

  const setMode = (mode) => {
    uploadToLS('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => (theme === 'light' ? setMode('dark') : setMode('light'))

  const pickTheme = (theme === 'light' ? LIGHT_MODE_THEME : DARK_MODE_THEME)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={pickTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

ThemeProviderCustom.propTypes = {
  children: PropTypes.node
}
