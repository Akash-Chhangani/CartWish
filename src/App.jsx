import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import ProductsPage from "./components/Products/ProductsPage";
import SingleProductPage from "./components/SingleProduct/SingleProduct";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <HomePage /> */}
      {/* <ProductsPage /> */}
      <SingleProductPage />
    </div>
  );
};

export default App;
