import Styled from "styled-components"

export const CarStyled = Styled.aside`
height: 80vh;
width: 30vw;
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

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
div{
    width: 18vw;
}
button{
    width: 20vw;
}
}

`
export const CaixaCarrinho = Styled.div`

height: 8vh;
display: flex;
justify-content: space-between;
align-items: center;
width: 24vw;

button{
    height:4vh;
    background-color: darkred;
    border: none;
    padding: 0 4px;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: #b55d5d;
    }
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
flex-direction: column;
justify-content: space-around;
align-items: start;
height: 10vh;
width: 20vw;

}
`
export const Text = Styled.p`
display: flex;
padding: 0.1em;
justify-content: space-between;
width: 100%;
/* white-space: nowrap; */
overflow: hidden;
text-overflow: ellipsis;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
width: 28vw;
white-space: nowrap;
display: static;
}
`

export const ContainerItem = Styled.section`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;

&:hover{
    background: #4b3c5d;
    border-radius: 10px;
}
`