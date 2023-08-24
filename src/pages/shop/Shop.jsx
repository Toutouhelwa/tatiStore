import React, { useState } from "react";
import Product from './Product'
import Categories from "./Categories";
import './shop.css'
export default function Shop({ Products }) {
  const [filteredProducts, setFilteredProducts] = useState(Products);

  return (
    <div className="shop">
      <Categories setFilteredProducts={setFilteredProducts} Products={Products} />
      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}
