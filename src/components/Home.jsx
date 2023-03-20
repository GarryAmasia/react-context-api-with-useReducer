import React from "react";
import { CartState } from "../context/Context";
import FilterComponent from "./FilterComponent";
import SingleProduct from "./SingleProduct";
import "./style.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);

  return (
    <div className="home">
      <FilterComponent />
      <div className="productContainer">
        {products.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
