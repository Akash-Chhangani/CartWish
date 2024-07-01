import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import ProductsPage from "./components/Products/ProductsPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <HomePage /> */}
      <ProductsPage />
    </div>
  );
};

export default App;
