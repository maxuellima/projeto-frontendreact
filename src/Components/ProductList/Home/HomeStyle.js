import Styled from "styled-components";

export const HomeStyle = Styled.div`
/* height: 100%; */
width: 60vw;
display: flex;
flex-direction: column;
gap: 1vh;
justify-content: start;
align-items: center;
box-sizing: border-box;

`
export const SelectDiv = Styled.div`
    text-align: center;
    
`

export const ContainerProdutos = Styled.div`
height: 100vh;
padding: 1vh 1vw;
width: 55vw;
display: flex;
justify-content: space-around;
align-items: start;
box-sizing: border-box;
flex-wrap: wrap;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    /* celulares */
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    }
`

