import React from "react";
import { ConteinerCard, ConterinerImagem, Imagem, ConteinerTextos, CaixaBotao, Botao } from "./ProductCardStyle";
import { Produtos } from "../../Assents/ProductsList";
const ProductCard = (props) => {

const {addToCart} = props
const {id, imagem, valor, nome, produto} = props
const {cart} = props

  return (
      <ConteinerCard>
        <ConterinerImagem>
          <Imagem src={imagem}></Imagem>
        </ConterinerImagem>
        <ConteinerTextos>
          <p>{nome}</p>
        </ConteinerTextos>
        <ConteinerTextos>
          <p>R$ {valor},00</p>
        </ConteinerTextos>
        <CaixaBotao>
          <Botao value={cart} onClick={()=>addToCart(produto)}>Adicionar ao carrinho</Botao>
        </CaixaBotao>
      </ConteinerCard>
  );
};

export default ProductCard;
