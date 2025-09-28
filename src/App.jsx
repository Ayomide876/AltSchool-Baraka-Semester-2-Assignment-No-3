import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./data/products";
import Hero from "./components/Hero";
import SubHeader from "./components/SubHeader";
import Sidebar from "./components/Sidebar";



export default function App() {
  // persist cart in localStorage
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    } catch {
      return [];
    }
  });
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setShowCart(true);
  };

  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} onOpenCart={() => setShowCart(true)} />
        <Hero />
      <main className="main-container">
        <SubHeader/>
        <div className="div-two" style={{display: "flex"}}>
          
        <Sidebar/>
        <ProductList products={products} addToCart={addToCart} />
        {showCart && (
          <Cart
            cart={cart}
            onClose={() => setShowCart(false)}
            removeItem={removeItem}
            clearCart={clearCart}
          />
        )}
        </div>
      </main>
    </div>
  );
}









// const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
