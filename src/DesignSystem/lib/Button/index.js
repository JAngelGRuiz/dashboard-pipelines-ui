import styled from '@emotion/styled'
import PropTypes from 'prop-types'

export const Button = ({ children }) => {
  return (
    <ButtonWrapper>{children}</ButtonWrapper>
  )
}

Button.propTypes = {
  children: PropTypes.node
}

const ButtonWrapper = styled.button(({ theme }) => ({
  outline: 'none',
  border: 'none',
  width: '110px',
  height: '30px',
  borderRadius: '10px',
  fontSize: '14px',
  fontWeight: '400',
  backgroundColor: theme.fills.contrast,
  color: 'black'
}))
