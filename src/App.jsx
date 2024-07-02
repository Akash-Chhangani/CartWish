import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import ProductsPage from "./components/Products/ProductsPage";
import SingleProductPage from "./components/SingleProduct/SingleProduct";
import CartPage from "./components/Cart/CartPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <HomePage /> */}
      {/* <ProductsPage /> */}
      {/* <SingleProductPage /> */}
      <CartPage />
    </div>
  );
};

export default App;
