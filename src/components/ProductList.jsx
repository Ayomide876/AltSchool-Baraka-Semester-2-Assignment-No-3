import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, addToCart }) {
  const [query, setQuery] = useState("");

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <div style={{ marginBottom: 12 }}>
        {/* <input
          type="search"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "8px", width: "100%", maxWidth: 360 }}
        /> */}
      </div>

      <div className="big-box-div">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}
