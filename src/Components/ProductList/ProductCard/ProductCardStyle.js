import Styled from "styled-components";

export const ConteinerCard = Styled.div`
width: 16vw;
height: 40vh;
padding: 1vh 1vw;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
/* gap: 0.4rem; */
margin-top: 2vh;
border-radius: 2%;

&:hover{
    cursor:pointer;
    background-color: #4b3c5d;
}
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
width: 40vw;

}

`;

export const ConterinerImagem = Styled.div`
display: flex;
justify-content: center;
/* height: 35vh;
width: 15vw; */


&:hover img{
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
}
`;

export const Imagem = Styled.img`
max-width: 25vw;
max-height: 25vh;
border-radius: 5px;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
max-width: 40vw;
max-height: 25vh;

}

`;

export const ConteinerTextos = Styled.div`
display: flex;
justify-content: center;
width: 20vw;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
width: 40vw;
}
`;

export const CaixaBotao = Styled.div`
display: flex;
justify-content: center;
width: 12vw;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
width: 20vw;
}
`;

export const Botao = Styled.button`
height: 6vh;
width: 12vw;
border-radius: 6px;
font-size: 0.8rem;
cursor: pointer;
    &:hover {
    background-color: #c5a898;
}
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
width: 20vw;

}

`;
