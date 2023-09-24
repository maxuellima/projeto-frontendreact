import Styled  from "styled-components"

export const HomeFilter = Styled.div`
height: 50vh;
width: 15vw;
display: flex;
flex-direction: column;
justify-content: start;
gap: 3vh;
align-items: center;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
height: 40vh;
}
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

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
height: 20vh;
flex-direction: column;
padding-left: 1em;

img{
    width: 10vw
}
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
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
    height: 30vh;
    padding-left: 1em;
    gap: 1vh;
}
`

export const LabelStyle = Styled.label`
display: flex;
flex-direction: column;
justify-content: center;
height: 10vh;
align-items: center;
gap: 0.5vh;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
height: 8vh;
width: 10vw;
gap: 0.2vh;
font-size: 1em;
}
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
