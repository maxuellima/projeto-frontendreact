import React from "react";
import { ProductStyled, ConteinerImg, Imagem, ConteinerProduto, ConteinerValor, CaixaBotao, Botao } from "./ProductCardStyle";
import { Produtos } from "../../Assents/ProductsList";
const ProductCard = (props) => {

const {addToCart} = props
const {id, imagem, valor, nome, produto} = props
const {cart} = props

//-------> FIZ COM DAVI esse aqui, substituir
// const addToCart = (preco, id)=>{
// const itemCarrinho = cart.filter(item => item !== objeto).sort(()=>{return 0})
// const addCarro = [...itemCarrinho, objeto]
// setCart(addCarro)
// addCarro.map((item)=>{
//   if(item.id === id){
//     return setSoma(soma + preco)
//   } 
// })
// }
  return (
      <ProductStyled>
        <ConteinerImg>
          <Imagem src={imagem}></Imagem>
        </ConteinerImg>
        <ConteinerProduto>
          <p>{nome}</p>
        </ConteinerProduto>
        <ConteinerValor>
          <p>R$ {valor},00</p>
        </ConteinerValor>
        <CaixaBotao>
          <Botao value={cart} onClick={()=>addToCart(produto)}>Adicionar ao carrinho</Botao>
        </CaixaBotao>
      </ProductStyled>
  );
};

export default ProductCard;
