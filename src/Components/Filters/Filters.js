import React from "react";

//Importando os estilos
import { HomeFilter, CabecalhoFilter, ConteinerDosFiltros, CaixaDosFiltros, LabelStyle, InputStyle } from "./FiltersStyle";

//Importando imagens
import astronautaMoon from "../../react-images/icon-moon-astrounaut.svg"


function Filter(props) {

  //Recebendo os estados
  const {minFilter, maxFilter, searchFilter} = props.states

  
  //Recebendo as funções handlers
  const {setMinFilter, setMaxFilter, setSearchFilter} = props.handlers

  const filterMin = (event)=>{
    setMinFilter(event.target.value)
}

  
  const filterMax = (event)=>{
    setMaxFilter(event.target.value)
  }
  const filterName = (event)=>{
    setSearchFilter(event.target.value)
  }
  return (
    <HomeFilter>
      <CabecalhoFilter>
        <h2>Filtros</h2>
        <img src={astronautaMoon} alt="" />
      </CabecalhoFilter>
      <section>
      <CaixaDosFiltros>
        <LabelStyle>
          Valor mínimo:
          <InputStyle min={0} type="number" value={minFilter} onChange={filterMin} />
        </LabelStyle>
        <LabelStyle>
          Valor Máximo:
          <InputStyle min={0} type="number" value={maxFilter} onChange={filterMax} />
        </LabelStyle>
        <LabelStyle>
          Busca por nome:
          <InputStyle type="name" value={searchFilter} onChange={filterName} />
        </LabelStyle>
      </CaixaDosFiltros>
      </section>
    </HomeFilter>
  );
}

export default Filter;
