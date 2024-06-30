import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../Store/Slice";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrementQuantity(item.id)}>
                  -
                </button>
                <button onClick={() => handleIncrementQuantity(item.id)}>
                  +
                </button>
              </div>
            </div>
            <button
              className="remove-button"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="total-price">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
