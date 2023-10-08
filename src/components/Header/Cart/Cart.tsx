import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "./styles/cart.css";

interface QuantityProps {
  quantity: number;
}

const CartQuantity: React.FC<QuantityProps> = ({ quantity }) => {
  return <div className="cart-quantity">{quantity}</div>;
};

const Cart = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const navigate = useNavigate();
  const { cart } = useCart();

  function navigateToCart() {
    navigate("/cart");
  }

  return (
    <div className="cart-container" onClick={navigateToCart}>
      <FontAwesomeIcon
        className="bag-icon"
        icon={faBagShopping}
      ></FontAwesomeIcon>
      <CartQuantity quantity={cart.length}></CartQuantity>
    </div>
  );
};

export default Cart;
