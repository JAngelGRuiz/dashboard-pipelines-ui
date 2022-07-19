import { css, Global, useTheme } from '@emotion/react'

export const GlobalStyles = () => {
  const theme = useTheme()
  return (
    <Global styles={css`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: ${theme.text.general};
      }
      
      body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.background.body};
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
      
      html {
        font-size: 14px;
      }
    `}
    />
  )
}
