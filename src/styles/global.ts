import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #__next {
        height: 100vh;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    body {
        --bg: #282c35;
        --textNormal: #ffffff88;
        --textLink: #ffa7c4;
        --textConfirmed: #8FBC8F;
    }

    body.light {
        --textNormal: #222222;
        --textLink: #d23669;
        --textConfirmed: #008000;
    }
`

export default GlobalStyles
