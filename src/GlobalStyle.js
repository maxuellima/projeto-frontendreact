import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --soft-purple: #4b3c5d;
    --dark-purple: #21203f;
    --ice-white: #fff1ce;
    --soft-pink: #e7bfa5;
    --purple-grey: #c5a898;
    --dark-grey: #3a352f;
}

h1{
    font-family: "Quicksand", cursiva;
    color: var(--dark-purple)
}

h2, h3{
    font-family: "Oswald", cursive;
    color: var(--ice-white)
}

body{
    font-family: "Rajdhani", sans-serif;
    background-color: var(--dark-purple);
    color: var(--ice-white);

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}




`;
