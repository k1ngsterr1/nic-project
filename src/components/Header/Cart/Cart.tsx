import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../../contexts/CartContext";

import "./styles/cart.css";

interface QuantityProps {
  quantity: number;
}

const CartQuantity: React.FC<QuantityProps> = ({ quantity }) => {
  return <div className="cart-quantity">{quantity}</div>;
};

const Cart = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const { cart } = useCart();

  return (
    <div className="cart-container">
      <FontAwesomeIcon
        className="bag-icon"
        icon={faBagShopping}
      ></FontAwesomeIcon>
      <CartQuantity quantity={cart.length}></CartQuantity>
    </div>
  );
};

export default Cart;
