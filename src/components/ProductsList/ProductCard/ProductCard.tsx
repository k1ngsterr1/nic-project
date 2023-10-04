import React from "react";

interface ProductCardProps {
  title: string;
  time: string;
  imageUrl: string;
  productName: string;
  description: string;
  rating: number;
  ratingQuantity: number;
  currentPrice: number;
  originalPrice: number;
  discount: number;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <div className="product-card">
      <span className="deal">{props.title}</span>
      <div className="time">{props.time}</div>
      <img src={props.imageUrl} alt={props.productName} />
      <h5 className="product-name">{props.productName}</h5>
      <p className="description">{props.description}</p>
      <div className="rating-container">
        <div className="rating">{props.rating}</div>
        <span className="rating-quanitity">{props.ratingQuantity}</span>
      </div>
      <div className="price-container">
        <span className="current-price">${props.currentPrice}</span>
        <span className="original-price">{props.originalPrice}</span>
        <div className="discount">{props.discount}</div>
      </div>
    </div>
  );
};

export default ProductCard;
