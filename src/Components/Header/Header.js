import React from "react";
import {Cabecalho, TextoCabecalho} from "./HeaderStyle";

function Header() {
  return (
    <div>
      <Cabecalho>
        <TextoCabecalho>
          <li>Produtos</li>
          <li>Carrinho</li>
          <li>home</li>
          <li>home</li>
        </TextoCabecalho>
      </Cabecalho>
    </div>
  );
}
export default Header;
