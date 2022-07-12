import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color:${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textColor};
}`
