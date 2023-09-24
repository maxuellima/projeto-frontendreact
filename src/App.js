import React from "react";
import { useState, useEffect } from "react";
// Importando estilos
import { GlobalStyle } from "./GlobalStyle";
import { Layout, Principal } from "./AppStyle";
//Importando componentes
import Header from "./Components/Header/Header";
import Filter from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import Footer from "./Components/Footer/Footer";

//Importando a lista de Produtos

import { Produtos } from "./Components/Assents/ProductsList";

function App() {
  //Declarando os estados e setEstados
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);

  //Estado e variável para fazer a soma total
  const [soma, setSoma] = useState(0);
  let valorTotal = soma;

  //UseEffect para guardar o array do carrinho no LocalStorage
  useEffect(() => {
    if (cart.length > 0) {
      const cartString = JSON.stringify(cart);
      localStorage.setItem("car", cartString);
    }

    //Aqui é o array de dependência --> Nesse caso indica que o useEffect acontecerá quando [cart] mudar
  }, [cart]);
  console.log(cart);

  //useEffect para poder persistir na tela
  useEffect(() => {
    const oldCart = JSON.parse(localStorage.getItem("car"));
    if (oldCart) {
      setCart(oldCart);
    }
  }, []);

  const produtosFiltrados = Produtos.filter(
    (item) =>
      searchFilter === "" ||
      item.nome.toLowerCase(searchFilter.toLowerCase()).includes(searchFilter)
  )
    .filter(
      (item) => item.valor >= minFilter || minFilter === "" || minFilter === 0
    )
    .filter(
      (item) => item.valor <= maxFilter || maxFilter === "" || maxFilter === 0
    );

  // Função para adicionar o item novo ao carrinho
  const addToCart = (produto) => {
    const newProduct = cart.find((item) => item.id === produto.id);
    if (newProduct === undefined) {
      //mudei de cart para produtos
      setCart([...cart, { ...produto, amount: 1 }]);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === produto.id) {
          return { ...newProduct, amount: newProduct.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    //Soma para o valor total
    setSoma(produto.valor + valorTotal);
  };

  //Função deletar item do carrinho

  const deleteProductCart = (produto) => {
    const productToDelete = cart.find((item) => item.id === produto.id);
    if (productToDelete.amount > 1) {
      const newCart = cart.map((item) => {
        if (item.id === produto.id) {
          return { ...productToDelete, amount: productToDelete.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      const newCart = cart.filter((item) => {
        return item.id !== produto.id;
      });
      setCart(newCart);
    }
    //Subtração para o valor total
    setSoma(valorTotal - produto.valor);
    //Garantir que o último item vai sair do carrinho e do localStorage
    localStorage.removeItem("car");
  };

  //Função de limpar todo o carrinho(implemente para facilitar caso o usuário tenha inserido muitos itens)
  const limparCarrinho = () => {
    localStorage.removeItem("car");
    setCart([]);
    setSoma(0);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Principal>
        <Filter
          states={{ minFilter, maxFilter, searchFilter }}
          handlers={{ setMinFilter, setMaxFilter, setSearchFilter }}
        />
        <Home
          states={{
            cart,
            Produtos,
            searchFilter,
            minFilter,
            maxFilter,
            produtosFiltrados,
          }}
          handlers={{ setCart, setAmount }}
          addToCart={addToCart}
        />
        <Cart
          states={{ cart, amount }}
          Produtos={Produtos}
          valorTotal={valorTotal}
          limparCarrinho={limparCarrinho}
          handlers={{ setCart, setAmount }}
          deleteProductCart={deleteProductCart}
        />
      </Principal>
      {/* <Footer /> */}
    </>
  );
}

export default App;
