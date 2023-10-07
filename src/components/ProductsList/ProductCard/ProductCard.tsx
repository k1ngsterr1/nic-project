import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles/product_card.css";

interface ProductCardProps {
  time?: string;
  imageUrl: string;
  productName: string;
  description: string;
  rating?: any;
  ratingQuantity?: number;
  currentPrice?: number;
  originalPrice?: number;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const navigate = useNavigate();
  const handleRedirection = () => {
    navigate(`/product/${props.productName}`);
  };

  return (
    <div className="product-card" onClick={handleRedirection}>
      <span className="deal">Deal of the day</span>
      <div className="time">{props.time}</div>
      <img
        className="product-image"
        src={props.imageUrl}
        alt={props.productName}
      />
      <div className="product-card-content">
        <h5 className="product-name">{props.productName}</h5>
        <p className="description">{props.description}</p>
        <div className="rating-container">
          <div className="rating">{props.rating}</div>
          <span className="rating-quantity">({props.ratingQuantity})</span>
        </div>
        <div className="price-container">
          <span className="current-price">${props.currentPrice}</span>
          <span className="original-price">$129.99</span>
          <div className="discount">
            <span className="percentage">-40%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
