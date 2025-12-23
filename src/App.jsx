import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <button onClick={() => navigate("/plants")}>Get Started</button>
    </div>
  );
}

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-icon">
          Cart
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
      <Link to="/about">About Us</Link>
    </nav>
  );
}

import { useSelector } from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
