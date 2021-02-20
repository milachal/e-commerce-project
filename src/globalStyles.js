import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

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