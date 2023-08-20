import Styled from "styled-components"

export const CarStyled = Styled.aside`
height: 80vh;
width: 18vw;
background: red;
`
export const CaixaHeader = Styled.div`
height: 10vh;
background: blue;
display: flex;
justify-content: center;
align-items: center;

h2{
    color:#fff;
}
`
export const CaixaCarrinho = Styled.section`
height: 50vh;
width: 16vw;
background: orange;
display: flex;
flex-direction: column;
gap: 3vh;
padding: 1vh;
flex-wrap: wrap;
`