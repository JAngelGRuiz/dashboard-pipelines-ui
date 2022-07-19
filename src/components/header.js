import styled from '@emotion/styled'
import { DarkModeIcon, JobsIcon, LightModeIcon, PipelinesIcon, ProjectsIcon } from '../DesignSystem'
import { useThemeMode } from '../hooks/useThemeMode'

export const Header = () => {
  const { toggleTheme, theme } = useThemeMode()

  const renderToggleThemeButton = () => {
    if (theme === 'dark') {
      return (
      <>
        <LightModeIcon />
        <LinkName>Light Mode</LinkName>
      </>
      )
    }

    return (
      <>
        <DarkModeIcon />
        <LinkName>Dark Mode</LinkName>
      </>
    )
  }

  return (
    <HeaderContainer>
      <NavBar>
      <LinkWrapper onClick={() => toggleTheme()}>
          {renderToggleThemeButton()}
        </LinkWrapper>
        <LinkWrapper>
          <JobsIcon />
          <LinkName>Jobs</LinkName>
        </LinkWrapper>
        <LinkWrapper>
          <PipelinesIcon />
          <LinkName>Pipelines</LinkName>
        </LinkWrapper>
        <LinkWrapper>
          <ProjectsIcon />
          <LinkName>Projects</LinkName>
        </LinkWrapper>
      </NavBar>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.section(({ theme }) => ({
  gridArea: 'header',
  height: '100%',
  width: '100%',
  backgroundColor: theme.background.navbar,
  display: 'flex',
  alignItems: 'center'
}))

const NavBar = styled.nav({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '5px 20px'
})

const LinkWrapper = styled.a({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1px 15px',
  cursor: 'pointer'
})

const LinkName = styled.span({
  marginLeft: '8px'
})
