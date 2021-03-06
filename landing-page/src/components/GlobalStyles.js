import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-family: 'Poppins', sans-serif;
}

h1 {
    font-size: 2.6rem;
}

li, button, label, input, p{
    font-size: 2rem;
}

h2 {
    font-size: 4.8rem;
}

h3 {
    font-size: 3rem;
    font-weight: normal;
}

h4, h5 {
    font-size:2.8rem;
}

@media screen and (max-width: 599px) {
    html {
        font-size: 45%;
    }
}

`;

export default GlobalStyle;
