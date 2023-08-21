import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import { Principal } from "./AppStyle";


function App() {
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
