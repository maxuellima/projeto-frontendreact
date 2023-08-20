import React from "react";
import { HomeFilter, CabecalhoFilter, ConteinerDosFiltros, CaixaDosFiltros, LabelStyle, InputStyle } from "./FiltersStyle";

function Filter() {
  return (
    <HomeFilter>
      <CabecalhoFilter>
        <h2>Filtros</h2>
      </CabecalhoFilter>
      <section>
      <CaixaDosFiltros>
        <LabelStyle>
          Valor Mínimo:
          <InputStyle />
        </LabelStyle>
        <LabelStyle>
          Valor Máximo:
          <InputStyle />
        </LabelStyle>
        <LabelStyle>
          Busca por nome:
          <InputStyle/>
        </LabelStyle>
      </CaixaDosFiltros>
      </section>
    </HomeFilter>
  );
}

export default Filter;
