import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Your Cart is Empty</h2>
        <Link to="/plants">
          <button style={{ marginTop: 20 }}>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Shopping Cart</h2>
      <table style={{ width: "100%", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee" }}>
        <thead>
          <tr>
            <th>Plant</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} style={{ textAlign: "center" }}>
              <td>
                <img src={item.image} alt={item.name} style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 6 }} />
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button onClick={() => dispatch(removeFromCart(item.id))} style={{ color: "red" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{ marginTop: 30 }}>Total Amount: ${total}</h3>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => alert("Checkout Coming Soon!")} style={{ marginRight: 20 }}>Checkout</button>
        <Link to="/plants">
          <button>Continue Shopping</button>
        </Link>
        <button onClick={() => dispatch(clearCart())} style={{ marginLeft: 20, background: "#eee" }}>Clear Cart</button>
      </div>
    </div>
  );
};

export default CartItem;
