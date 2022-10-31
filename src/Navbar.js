import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-container">
        <div className="cart-symbol">
          <TiShoppingCart />
        </div>
        <div className="amount-container">
          <p>{amount}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
