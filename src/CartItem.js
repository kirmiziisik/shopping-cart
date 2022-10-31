import React from "react";
import { HiArrowSmUp } from "react-icons/hi";
import { HiArrowSmDown } from "react-icons/hi";
import { useGlobalContext } from "./context";

const CartItem = ({ id, title, price, img, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <article>
      <div className="item-container">
        <img className="item-img" src={img} alt="phone" />
        <div className="item-features">
          <h3 className="item-title">{title}</h3>
          <span className="item-price">${price}</span>
          <button className="remove-btn" onClick={() => remove(id)}>
            remove
          </button>
        </div>
      </div>
      <div className="item-control">
        <button className="btn-up" onClick={() => increase(id)}>
          <HiArrowSmUp />
        </button>
        <span className="item-amount">{amount}</span>
        <button>
          <HiArrowSmDown className="btn-down" onClick={() => decrease(id)} />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
