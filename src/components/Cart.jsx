import React from "react";

function parsePrice(price) {
  if (typeof price === "number") return price;
  return parseFloat(String(price).replace(/[^0-9.-]+/g, "")) || 0;
}

export default function Cart({ cart, onClose, removeItem, clearCart }) {
  const total = cart.reduce((acc, it) => acc + parsePrice(it.price), 0);

  return (
    <aside id="cart" className="cart" style={{ position: "fixed", right: 16, top: 80 }}>
      <button id="close-cart" className="cart-close" onClick={onClose} aria-label="Close cart">
        ✕
      </button>

      <h2 className="cart-title">
        Your Cart <span id="cart-count" className="cart-count">({cart.length})</span>
      </h2>

      <ul id="cart-items" className="cart-items">
        {cart.map((item, idx) => (
          <li key={idx} data-index={idx}>
            <div>
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">${parsePrice(item.price).toFixed(2)}</span>
            </div>
            <div>
              <button className="remove-item" onClick={() => removeItem(idx)} type="button">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-footer">
        <div className="cart-total">
          <strong>Total:</strong> <span id="cart-total">${total.toFixed(2)}</span>
        </div>
        <button id="clear-cart" className="btn btn-clear" onClick={clearCart} type="button">
          CLEAR
        </button>
      </div>
    </aside>
  );
}
