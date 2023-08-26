import React from "react";

//Importando os estilos
import { HomeFilter, CabecalhoFilter, ConteinerDosFiltros, CaixaDosFiltros, LabelStyle, InputStyle } from "./FiltersStyle";


function Filter(props) {
  const filterMin = (event)=>{
    props.setMinFilter(event.target.value)
}
console.log(props.minFilter)
  
  const filterMax = (event)=>{
    props.setMaxFilter(event.target.value)
  }
  const filterName = (event)=>{
    props.setSearchFilter(event.target.value)
  }
  return (
    <HomeFilter>
      <CabecalhoFilter>
        <h2>Filtros</h2>
      </CabecalhoFilter>
      <section>
      <CaixaDosFiltros>
        <LabelStyle>
          Valor mínimo:
          <InputStyle type="number" value={props.minFilter} onChange={filterMin} />
        </LabelStyle>
        <LabelStyle>
          Valor Máximo:
          <InputStyle type="number" value={props.maxFilter} onChange={filterMax} />
        </LabelStyle>
        <LabelStyle>
          Busca por nome:
          <InputStyle type="name" value={props.searchFilter} onChange={filterName} />
        </LabelStyle>
      </CaixaDosFiltros>
      </section>
    </HomeFilter>
  );
}

export default Filter;
