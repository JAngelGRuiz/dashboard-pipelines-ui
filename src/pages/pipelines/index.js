import { Menu, TimeLine } from './components'
import styled from '@emotion/styled'
import { MediaQuery } from '../../DesignSystem'

export const PipeLine = () => {
  return (
  <Container>
    <MenuContainer><Menu /></MenuContainer>
    <TimeLineContainer><TimeLine /></TimeLineContainer>
  </Container>
  )
}

const MenuContainer = styled.div({
  gridArea: 'sidebar'
})

const TimeLineContainer = styled.div({
  gridArea: 'main'
})

const Container = styled.div(({ theme }) => ({
  gridArea: 'page',
  display: 'grid',
  gridTemplateAreas: "'sidebar main'",
  gridTemplateColumns: '20% 1fr',
  height: '100%',
  width: '100%',
  maxWidth: '100vw',
  backgroundColor: theme.background.body,
  marginTop: '50px',

  [MediaQuery.mobil]: {
    gridTemplateAreas: "'sidebar' 'main'",
    gridTemplateColumns: '100%',
    gridTemplateRows: '80px auto'
  }
}))
