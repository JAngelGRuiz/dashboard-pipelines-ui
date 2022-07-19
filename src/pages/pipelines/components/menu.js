import styled from '@emotion/styled'
import { Button, MediaQuery, Text } from '../../../DesignSystem'

export const Menu = () => {
  return (
    <MenuContainer>
      <MenuHeader>
        <Text type='title'>Pipelines</Text>
        <Button>New PipeLine</Button>
      </MenuHeader>
    </MenuContainer>
  )
}

const MenuContainer = styled.div({
  paddingLeft: '20px',
  display: 'flex',
  flexDirection: 'column',

  [MediaQuery.mobil]: {
    padding: '10px 30px'
  }
})

const MenuHeader = styled.div({
  padding: '5px',
  display: 'flex',
  justifyContent: 'space-between'
})
