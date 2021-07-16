import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    .KuulaidfinanceLogo{
      width: 270px;
    }
    img {
      height: auto;
      max-width: 100%;
    }
  }
  .mobile-icon image {
    width: 30px;
    height: 33px;
  }
`

export default GlobalStyle
