import React from "react";
import { useState } from "react";
//Importando componentes
import ProductCard from "../ProductCard/ProductCard";
//Importando estilos
import { ContainerProdutos, HomeStyle } from "./HomeStyle";
//Importante objeto de array com os produtos
import { Produtos } from "../../Assents/ProductsList";

const Home = () => {
  const [ordination, setOrdination] = useState("");
  const mudarOrdem = (event) => {
    setOrdination(event.target.value);
    
  };
  console.log(ordination)

  const produtos = Produtos;
  return (
    <HomeStyle>
      <div>
        <p>Quantidade de produtos: {produtos.length}</p>
        Selecione ordem:
        <select value={ordination} onChange={mudarOrdem}>
          <option>Crescente</option>
          <option>Decrescente</option>
        </select>

        {/* <select value={ordination} onChange={mudarOrdem}>
          <option>Selecione: </option>
          <option>Crescente</option>
          <option>Decrescente</option>
        </select> */}
      </div>
      <ContainerProdutos>
        <ProductCard
          id={produtos[0].id}
          nome={produtos[0].nome}
          valor={produtos[0].valor}
          imagem={produtos[0].imagem}
        />
        <ProductCard
          id={produtos[1].id}
          nome={produtos[1].nome}
          valor={produtos[1].valor}
          imagem={produtos[1].imagem}
        />
        <ProductCard
          id={produtos[2].id}
          nome={produtos[2].nome}
          valor={produtos[2].valor}
          imagem={produtos[2].imagem}
        />
      </ContainerProdutos>
    </HomeStyle>
  );
};
export default Home;
