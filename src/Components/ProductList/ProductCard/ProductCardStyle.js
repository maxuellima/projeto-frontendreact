import Styled from "styled-components";

export const ProductStyled = Styled.div`
width: 20vw;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
`;

export const ConteinerImg = Styled.div`
display: flex;
justify-content: center;
height: 40vh;
width: 20vw;
`;

export const Imagem = Styled.img`
height:40vh;
border-radius: 10px;
`;
export const ConteinerProduto = Styled.div`
display: flex;
justify-content: center;
width: 20vw;
`;

export const ConteinerValor = Styled.div`
display: flex;
justify-content: center;
width: 20vw;
`;

export const CaixaBotao = Styled.div`
display: flex;
justify-content: center;
width: 20vw;
`;

export const Botao = Styled.button`
height: 6vh;
width: 15vw;
border-radius: 10px;
font-size: 1rem;
    :hover {
    cursor: pointer;
    background: lightblue;
}
`;
