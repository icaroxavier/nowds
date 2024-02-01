import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: ${({ theme }) => theme.fonts.body};
        --webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.fonts.title};
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`
