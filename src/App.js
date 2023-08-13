import logo from "./logo.svg";
import Filter from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";

import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Filter />
      <Cart/>
    </>
  );
}

export default App;
