import styled from '@emotion/styled'
import { Provider } from './providers'
import { Header } from './components'
import { PipeLine } from './pages'

const App = () => {
  return (
    <Provider>
      <Container >
        <Header />
        <PipeLine />
      </Container>
    </Provider>
  )
}

const Container = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas: "'header' 'page'",
  gridTemplateRows: '55px 1fr',
  height: '100vh',
  width: '100vw',
  maxWidth: '100vw',
  backgroundColor: theme.background.body
}))

export default App
