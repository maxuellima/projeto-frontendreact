import Styled from "styled-components";

export const Cabecalho = Styled.header`

background-color: #4b3c5d;
height: 14vh;
width: 100vw;
position: relative;
top: 0;
margin-bottom: 1vh;
`;

export const TextoCabecalho = Styled.div`
box-sizing: border-box;
width: 100%;
height: 100%;
padding: 1% 1%;
display: flex;
justify-content: space-around;
align-items: center;

img{
    width: 5vw;
}

div{
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img{
        width: 5vw;
    }
}
h1{
    font-size:2.5rem;
    color: #fff1ce;
}
`;
