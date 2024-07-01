import React from "react";
import "./ProductsPage.css";
import ProductsSidebar from "./ProductsSidebar";

const ProductsPage = () => {
  return (
    <section className="product_page">
      <ProductsSidebar />
      <section className="product_list_section">Product List</section>
    </section>
  );
};

export default ProductsPage;
