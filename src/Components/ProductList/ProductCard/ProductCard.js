import React from "react";
import { ProductStyled, ConteinerImg, Imagem, ConteinerProduto, ConteinerValor, CaixaBotao, Botao } from "./ProductCardStyle";
const ProductCard = (props) => {
  return (
      <ProductStyled>
        <ConteinerImg>
          <Imagem src={props.imagem}></Imagem>
        </ConteinerImg>
        <ConteinerProduto>
          <p>{props.nome} </p>
        </ConteinerProduto>
        <ConteinerValor>
          <p>R$ {props.valor}</p>
        </ConteinerValor>
        <CaixaBotao>
          <Botao>Adicionar ao carrinho</Botao>
        </CaixaBotao>
      </ProductStyled>
  );
};

export default ProductCard;
