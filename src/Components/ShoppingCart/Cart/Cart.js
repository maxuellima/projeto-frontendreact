import React from "react";
import Items from "../Items/Items";
import { CarStyled, CaixaHeader, CaixaCarrinho } from "./CartStyle";

const Cart = () => {
  return (
    <CarStyled>
      <CaixaHeader>
      <h2>Carrinho</h2>
      </CaixaHeader>
      <CaixaCarrinho>
        <div>
          <p>Quantidade</p>
          <p>Produto</p>
        </div>
        <div>
          <button>Remover</button>
        </div>
        <div>
          <p>Valor: </p>
        </div>
      </CaixaCarrinho>
      
      <Items/>
    </CarStyled>
  );
};

export default Cart;
