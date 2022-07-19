import PropTypes from 'prop-types'
import { GlobalStyles } from '../DesignSystem'
import { ThemeProviderCustom } from './ThemeProvider'

export const Provider = ({ children }) => {
  return (
    <ThemeProviderCustom>
        <GlobalStyles />
        { children }
    </ThemeProviderCustom>
  )
}

Provider.propTypes = {
  children: PropTypes.node
}
