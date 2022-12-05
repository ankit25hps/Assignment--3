import React from "react";
import Product from "./Product";

export default function Container(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>MY BAG</h2>
      <h4>*Item are reserved for 60 minutes*</h4>
      <div className="column">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
