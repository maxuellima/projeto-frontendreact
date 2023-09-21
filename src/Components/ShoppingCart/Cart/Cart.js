import React from "react";
import Items from "../Items/Items";
import {
  CarStyled,
  CaixaHeader,
  CaixaCarrinho,
  ContainerItem,
  Text,
} from "./CartStyle";
import { ProductStyled } from "../../ProductList/ProductCard/ProductCardStyle";

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
      <Text>{produto.nome}</Text>
      <Text>Qtd: {produto.amount}</Text>
      <Text>{produto.valor}</Text>
      <button onClick={() => deleteProductCart(produto)}>XX</button>
    </CaixaCarrinho>
  ));

  return (
    <CarStyled>
      <CaixaHeader>
        <h2>Carrinho</h2>
        <div>
          <p>Valor total: R$ {valorTotal}, 00 </p>
        </div>
        <button onClick={limparCarrinho}>Limpar Carrinho</button>
      </CaixaHeader>
      <Items productsCart={productsCart} />
    </CarStyled>
  );
};

export default Cart;
