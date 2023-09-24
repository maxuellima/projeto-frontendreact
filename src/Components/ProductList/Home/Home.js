import React from "react";
import { useState } from "react";
//Importando componentes
import ProductCard from "../ProductCard/ProductCard";
//Importando estilos
import { ContainerProdutos, HomeStyle, SelectDiv } from "./HomeStyle";
//Importante objeto de array com os produtos

const Home = (props) => {

//Recebendo estados 
const {cart, Produtos, searchFilter, minFilter, maxFilter, produtosFiltrados} = props.states

//Recebendo a função de adicionar
const {addToCart} = props

//Recebendo os set estados
const {setCart, setAmount} = props.handlers

  const [ordination, setOrdination] = useState("asc");
  const mudarOrdem = (event) => {
    setOrdination(event.target.value);
  };

  const renderList = produtosFiltrados
  .sort((a,b)=>ordination === "" || ordination === "asc" && a.nome > b.nome ? 1 : -1)
  .sort((a,b)=>ordination === "" || ordination === "desc" && a.nome > b.nome ? -1 : 1)
  .map((item) => {
    return (
      <ProductCard
      cart={cart}  
      key={item.id}
      handlers = {{setCart, setAmount}}
      addToCart={addToCart}
      produto = {item}
      id={item.id}
      nome={item.nome}
      valor={item.valor}
      imagem={item.imagem}
      />
    );
  })


  return (
    <HomeStyle>
      <SelectDiv>
        <p>Quantidade de produtos disponíveis: {Produtos.length}</p>
        Ordem alfabética:
        <select value={ordination} onChange={mudarOrdem}>
          <option value={"asc"}>Crescente</option>
          <option value={"desc"}>Decrescente</option>
        </select>
      </SelectDiv>
      <ContainerProdutos>
        {renderList}
      </ContainerProdutos>
    </HomeStyle>
  );
};
export default Home;
