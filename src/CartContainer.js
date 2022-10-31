import React from "react";
import { useGlobalContext } from "./context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart, total, clearCart, amount } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <p className="empty-bag">is currently empty 🛒</p>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>

      <div>
        {cart.map((item) => {
          return <CartItem {...item} key={item.id} />;
        })}
      </div>

      <footer>
        <hr />
        <div className="total-container">
          <h4>Total</h4>
          <span>${total}</span>
        </div>
        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
