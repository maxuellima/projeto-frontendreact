import React from "react";
import { useState } from "react";
// Importando estilos
import { GlobalStyle } from "./GlobalStyle";
import { Principal } from "./AppStyle";
//Importando componentes
import Header from "./Components/Header/Header";
import Filter from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import Footer from "./Components/Footer/Footer";



function App() {
  const [minFilter, setMinFilter] = useState(0)
  const [maxFilter, setMaxFilter] = useState(0)
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState(0)
  const [amount, setAmout] = useState(0)
  
  return (
    <>
      <GlobalStyle />
      <Header />
      <Principal>
        <Filter />
        <Home />
        <Cart />
      </Principal>

      <Footer />
    </>
  );
}

export default App;
