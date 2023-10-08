import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header/Header";

import "./styles/cart_page.css";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (cart.length === 0) {
    return <div className="screen">Your cart is empty. Start shopping!</div>;
  }

  function plusQuantity() {
    setQuantity(quantity + 1);
  }

  function minusQuantity() {
    setQuantity(quantity - 1);

    if (quantity == 1) {
      setQuantity(1);
    }
  }

  return (
    <div className="screen">
      <div className="container">
        <Header />
        <div className="section-heading margin">
          <strong>
            Card <span className="quantity">{cart.length.toString()}</span>
          </strong>
        </div>
        <div className="cards">
          {cart.map((product, index) => (
            <div className="card" key={index}>
              <div className="card-upper-row">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-image"
                />
                <div className="card-content">
                  <span className="card-heading">{product.title}</span>
                  <span className="color-and-price">
                    <div className="colors">
                      <span className="color-text">Color:</span>
                      <div className="color"></div>
                    </div>
                    <span className="price">
                      {cart.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                      $
                    </span>
                  </span>
                </div>
              </div>
              <div className="card-lower-row">
                <div className="quantity-container">
                  <div className="quantity-counter">
                    <FontAwesomeIcon
                      className="quantity-icon minus"
                      icon={faMinus}
                      onClick={minusQuantity}
                    ></FontAwesomeIcon>
                    <span className="quantity">{quantity}</span>
                    <FontAwesomeIcon
                      className="quantity-icon plus"
                      icon={faPlus}
                      onClick={plusQuantity}
                    ></FontAwesomeIcon>
                  </div>
                </div>
                <span className="price">
                  {cart.reduce((total, product) => total + product.price, 0)}$
                </span>
                <FontAwesomeIcon
                  className="trash-icon"
                  icon={faTrash}
                  onClick={() => removeFromCart(product.id)}
                ></FontAwesomeIcon>
              </div>
              {/* <button onClick={() => removeFromCart(product.id)}>Remove</button> */}
            </div>
          ))}
        </div>
        <div>
          {/* <strong>Total: </strong>$
          {cart.reduce((total, product) => total + product.price, 0)} */}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
