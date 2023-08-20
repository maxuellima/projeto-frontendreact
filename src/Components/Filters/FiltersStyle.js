import Styled  from "styled-components"

export const HomeFilter = Styled.div`
height: 80vh;
width: 18vw;
background:green;
display: flex;
flex-direction: column;
justify-content: start;
gap: 3vh;
align-items: center;
`
export const CabecalhoFilter = Styled.div`
width: 16vw;
height: 10vh;
background: blue;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;

h2{
    font-size: 2rem;
    background: red;
}
`
export const ConteinerDosFiltros = Styled.section`
height: 50vh;
display: flex;
justify-content: center;
background: orange;
`
export const CaixaDosFiltros = Styled.div`
height: 40vh;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap: 2vh;
background: yellow;
`

export const LabelStyle = Styled.label`
display: flex;
flex-direction: column;
justify-content: center;
height: 10vh;
align-items: center;
gap: 0.5vh;
background: pink;

`

export const InputStyle = Styled.input`
width:14vw;
height: 5vh;
border-radius: 10px;
color: black;
font-family: Arial;
font-size: 1rem;
padding: 0.1rem;
text-align: center;
`
