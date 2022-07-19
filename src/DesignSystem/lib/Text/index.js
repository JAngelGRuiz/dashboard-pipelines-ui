import PropTypes from 'prop-types'
import styled from '@emotion/styled'

export const Text = ({ type = 'normal', children, space }) => {
  if (type === 'subtitle') {
    return (
      <Subtitle>{children}</Subtitle>
    )
  }

  if (type === 'title') {
    return (
      <Title>{children}</Title>
    )
  }

  if (type === 'secondary') {
    return (
      <Secondary space={space}>{children}</Secondary>
    )
  }

  return (
    <Normal>{children}</Normal>
  )
}

const Subtitle = styled.h3({
  fontSize: '14px',
  fontWeight: '600'
})

const Normal = styled.span({
  fontSize: '14px',
  fontWeight: '200'
})

const Title = styled.h2({
  opacity: '87%',
  fontSize: '20px'
})

const Secondary = styled.span(({ space }) => ({
  fontWeight: '100',
  fontSize: '12px',
  marginLeft: space ? '7px' : 0
}))

Text.propTypes = {
  type: PropTypes.oneOf(['normal', 'title', 'secondary', 'subtitle']),
  children: PropTypes.node,
  space: PropTypes.bool
}
