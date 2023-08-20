import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeStyle } from "./HomeStyle";

const Home = () => {
  return (
    <HomeStyle>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </HomeStyle>
  );
};
export default Home;
