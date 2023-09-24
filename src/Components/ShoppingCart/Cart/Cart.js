import React from "react";
import Items from "../Items/Items";
import {
  CarStyled,
  CaixaHeader,
  CaixaCarrinho,
  ContainerItem,
  Text,
} from "./CartStyle";
 
import carrinho from "../../../react-images/carrinho.svg"

import { ConteinerCard } from "../../ProductList/ProductCard/ProductCardStyle";

const Cart = (props) => {
  const { cart, amount } = props.states;
  const { setCart, setAmount } = props.handlers;
  const { Produtos } = props;
  const { deleteProductCart } = props;
  const { valorTotal } = props;
  const {limparCarrinho} = props

  //renderizando os produtos no carrinho
  const productsCart = cart.map((produto) => (
    <CaixaCarrinho key={produto.id}>
      <Text>{produto.nome} </Text>
      <Text> Qtd: {produto.amount} </Text>
      <Text>R$ {produto.valor} </Text>
      <button onClick={() => deleteProductCart(produto)}>X</button>
    </CaixaCarrinho>
  ));

  return (
    <CarStyled>
      <CaixaHeader>
        <div>
        <h2>Carrinho</h2>
        <img src= {carrinho} width={30} alt="Ícone Carrinho" />
        </div>
        <div>
          <p>Valor total: R$ {valorTotal}, 00 </p>
        </div>
        <button onClick={limparCarrinho}>Limpar todo Carrinho</button>
      </CaixaHeader>
      <ContainerItem>
      <Items productsCart={productsCart} />
      </ContainerItem>
      
    </CarStyled>
  );
};

export default Cart;
