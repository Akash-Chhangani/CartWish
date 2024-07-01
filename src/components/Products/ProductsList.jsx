import React from "react";
import "./ProductsList.css";
import ProductCard from "./ProductCard";
const ProductsList = () => {
  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className="products_sorting">
          <option value="">Relevance</option>
          <option value="price desc">Price High To Low</option>
          <option value="price asc">Price Low To High</option>
          <option value="rate desc">Rate High To Low</option>
          <option value="rete asc">Rate Low To High</option>
        </select>
      </header>
      <div className="products_list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductsList;
