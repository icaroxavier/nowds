import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Space Grotesk', sans-serif;
        --webkit-font-smoothing: antialiased;   
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`
