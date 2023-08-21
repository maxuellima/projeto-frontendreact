import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ContainerProdutos, HomeStyle } from "./HomeStyle";
import { Produtos } from "../../Assents/ProductsList";

const Home = () => {
  const produtos = Produtos;
  return (
    <HomeStyle>
      <div>
        <p>Quantidade de produtos: {produtos.length}</p>
      </div>
      <ContainerProdutos>
        <ProductCard
          id={produtos[0].id}
          nome={produtos[0].nome}
          valor={produtos[0].valor}
          imagem={produtos[0].imagem}
        />
        <ProductCard
          id={produtos[0].id}
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
