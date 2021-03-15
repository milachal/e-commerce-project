import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    html, body {
        height: 100%;
    }

    #root {
        height: 100%;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
    }

    .slick-slide img {
        display: inline-block;
    }
`;

export default GlobalStyle;