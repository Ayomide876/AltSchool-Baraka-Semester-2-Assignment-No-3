import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="product">
      <div className="big-box">
        <img
          src={product.image}
          alt={product.name}
          width="210"
          height="258"
          style={{ objectFit: "cover" }}
        />
        <button
          className="big-box-button add-to-cart"
          onClick={() => addToCart(product)}
          type="button"
        >
          ADD TO CART
        </button>
      </div>

    <br />
      <small className="sec-text">{product.category}</small>
      <p className="name">{product.name}</p>
      <small className="sec-text price">${product.price}</small>
    </div>
  );
}
