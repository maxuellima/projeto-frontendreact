import React from "react";
import { ProductStyled, ConteinerImg, Imagem, ConteinerProduto, ConteinerValor, CaixaBotao, Botao } from "./ProductCardStyle";
import Alyne from "../../../Assets/Alyne.jpg"
const ProductCard = () => {
  return (
      <ProductStyled>
        <ConteinerImg>
          {/* <Imagem src="https://picsum.photos/200/300"></Imagem> */}
          <Imagem src={Alyne}alt="Alyne"></Imagem>
        </ConteinerImg>
        <ConteinerProduto>
          <p>Caderno Azul </p>
        </ConteinerProduto>
        <ConteinerValor>
          <p>Valor: R$ 80,00</p>
        </ConteinerValor>
        <CaixaBotao>
          <Botao>Adicionar ao carrinho</Botao>
        </CaixaBotao>
      </ProductStyled>
  );
};

export default ProductCard;
