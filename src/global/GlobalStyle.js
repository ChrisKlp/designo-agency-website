import { createGlobalStyle } from "styled-components"
import reset from "styled-reset-advanced"

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    min-width: 28rem;
    font-family: 'Jost', sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
  }

  p {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`

export default GlobalStyle
