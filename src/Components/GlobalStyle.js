import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    };

    *{
        text-decoration: none;
        color:inherit;
    }
`;

export default GlobalStyle;