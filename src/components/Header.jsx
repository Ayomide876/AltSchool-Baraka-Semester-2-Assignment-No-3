import React from "react";

export default function Header({ cartCount, onOpenCart }) {
  return (
    <header className="header">
      <h3 style={{ display: "flex", flexGrow: 1 }}>BEJAMAS_</h3>
      <div>
        <button id="open-cart" className="btn" onClick={onOpenCart} aria-label="Open cart">
          🛒 {cartCount}
        </button>
      </div>
    </header>
  );
}
