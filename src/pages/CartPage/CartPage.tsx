import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTrash,
  faShoppingBag,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./styles/cart_page.css";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const maxLengthTitle = 20;

  if (cart.length === 0) {
    return (
      <div className="screen">
        <Header />
        <div className="empty-container">
          <div className="text-container">
            <FontAwesomeIcon
              className="icon"
              icon={faCircleXmark}
            ></FontAwesomeIcon>
            <p className="main-text">
              <strong>Your Cart is Empty 🛒</strong>
            </p>
            <p className="text">
              It looks like you haven't added any items to your cart yet. Start
              exploring our collection and find something you love!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
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
      <Header />
      <div className="container">
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
            </div>
          ))}
        </div>
        <div className="cards-tablet-content">
          <div className="content">
            <div className="cards-tablet">
              {cart.map((product, index) => (
                <div className="card" key={index}>
                  <div className="card-upper-row">
                    <div className="card-title-img">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="card-image"
                      />
                      <div className="card-content">
                        <span className="card-heading">
                          {product.title.length > maxLengthTitle
                            ? product.title.substring(0, maxLengthTitle - 3) +
                              "..."
                            : product.title}
                        </span>
                        <span className="color-and-price">
                          <div className="colors">
                            <span className="color-text">Color:</span>
                            <div className="color"></div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <span className="price">
                      {cart.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                      $
                    </span>
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
                      {cart.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                      $
                    </span>
                    <FontAwesomeIcon
                      className="trash-icon"
                      icon={faTrash}
                      onClick={() => removeFromCart(product.id)}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              ))}
            </div>
            <div className="summary-coupon">
              <div className="summary-block">
                <div className="summary-container">
                  <div className="summary-heading">Order Summary</div>
                  <div className="price-row">
                    <span className="price-text">Price:</span>
                    <span className="price">$99.23</span>
                  </div>
                  <div className="shipping-row">
                    <span className="shipping-text">Shipping</span>
                    <span className="price">$0</span>
                  </div>
                  <div className="tax-row">
                    <span className="tax-text">Tax:</span>
                    <span className="price">$0</span>
                  </div>
                  <div className="gift-row">
                    <div className="checkbox-container">
                      <input
                        type="checkbox"
                        name="checkbox"
                        className="checkbox"
                      />
                      <label htmlFor="checkbox" className="checkbox-label">
                        Pack in a Gift Box
                      </label>
                    </div>
                    <span className="price">$10.90</span>
                  </div>
                  <figure className="separator"></figure>
                  <div className="total-row">
                    <span className="total-text-bold">Total Price</span>
                    <span className="bold-price">$110.13</span>
                  </div>
                </div>
                <button className="checkout-btn">
                  <FontAwesomeIcon className="bag-icon" icon={faShoppingBag} />
                  CHECKOUT
                </button>
              </div>
              <div className="coupon-container-tab">
                <input
                  type="text"
                  className="coupon-input"
                  placeholder="Enter coupon code"
                />
                <button className="apply-btn"> Apply Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="summary">
        <div className="summary-container">
          <div className="summary-heading">Order Summary</div>
          <div className="price-row">
            <span className="price-text">Price:</span>
            <span className="price">$99.23</span>
          </div>
          <div className="shipping-row">
            <span className="shipping-text">Shipping</span>
            <span className="price">$0</span>
          </div>
          <div className="tax-row">
            <span className="tax-text">Tax:</span>
            <span className="price">$0</span>
          </div>
          <div className="gift-row">
            <div className="checkbox-container">
              <input type="checkbox" name="checkbox" className="checkbox" />
              <label htmlFor="checkbox" className="checkbox-label">
                Pack in a Gift Box
              </label>
            </div>
            <span className="price">$10.90</span>
          </div>
          <figure className="separator"></figure>
          <div className="total-row">
            <span className="total-text-bold">Total Price</span>
            <span className="bold-price">$110.13</span>
          </div>
        </div>
        <button className="checkout-btn">
          <FontAwesomeIcon className="bag-icon" icon={faShoppingBag} />
          CHECKOUT
        </button>
      </div>
      <div className="coupon-container">
        <input
          type="text"
          className="coupon-input"
          placeholder="Enter coupon code"
        />
        <button className="apply-btn">Login And Apply Code</button>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
