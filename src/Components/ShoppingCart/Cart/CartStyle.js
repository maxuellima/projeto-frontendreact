import Styled from "styled-components"

export const CarStyled = Styled.aside`
height: 80vh;
width: 25vw;
`
export const CaixaHeader = Styled.div`
height: 20%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: start;
margin-bottom:0.3em;

div{
    display: flex;
}

button{
    border: none;
    width: 10vw;
    height: 4vh;
    border-radius: 10px;

    &:hover{
        background:#fff1ce;
        cursor: pointer;
    }
}

`
export const CaixaCarrinho = Styled.div`

height: 5vh;
display: flex;
justify-content: space-between;
align-items: center;
width: 20vw;

button{
    height:50%;
    background-color: darkred;
    border: none;
    padding: 0 4px;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: #b55d5d;
    }
}
`
export const Text = Styled.p`
width: 30%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`

export const ContainerItem = Styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;

&:hover{
    background: #4b3c5d;
    border-radius: 10px;
}
`