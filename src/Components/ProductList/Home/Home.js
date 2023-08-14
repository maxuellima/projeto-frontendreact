import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeStyle } from "./HomeStyle";

const Home = () => {
  return (
    <HomeStyle>
      <h1>Esse é o home</h1>
      <ProductCard />
    </HomeStyle>
  );
};
export default Home;
