import Styled  from "styled-components"

export const HomeFilter = Styled.div`
height: 50vh;
width: 15vw;
display: flex;
flex-direction: column;
justify-content: start;
gap: 3vh;
align-items: center;
`
export const CabecalhoFilter = Styled.div`
width: 100%;
height: 10vh;
display: flex;
justify-content: space-around;
align-items: center;
box-sizing: border-box;

img{
    width: 4vw;
}

h2{
    font-size: 2rem;
}
`
export const CaixaDosFiltros = Styled.div`
height: 40vh;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap: 2vh;
border-radius: .8em;

&:hover{
    background-color: #4b3c5d;
}
`

export const LabelStyle = Styled.label`
display: flex;
flex-direction: column;
justify-content: center;
height: 10vh;
align-items: center;
gap: 0.5vh;


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
