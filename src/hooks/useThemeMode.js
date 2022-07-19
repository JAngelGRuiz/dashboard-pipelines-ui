import React from 'react'
import { ThemeContext } from '../contexts'

export const useThemeMode = () => React.useContext(ThemeContext)
