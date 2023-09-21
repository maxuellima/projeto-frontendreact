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
flex-direction: column;
justify-content: center;
align-items: start;

p{
    color: white;
}

h2{
    color:#fff;
}
`
export const CaixaCarrinho = Styled.div`

background-color: orange;
flex-direction: column;
gap: 3vh;
padding: 1vh;
flex-wrap: wrap;

button{
    background-color: tomato;
    border: none;
    padding: 0 4px;
}
`
export const Text = Styled.p`
width: 100%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`

export const ContainerItem = Styled.section`
border: 1px solid black;
display: flex;
align-items: center;
padding: 10px;
margin: 5px;
`