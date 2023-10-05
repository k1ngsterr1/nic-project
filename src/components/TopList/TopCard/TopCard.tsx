import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faFullHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/top_card.css";

interface TopCardProps {
  imageUrl: string;
  productName: string;
  description: string;
  rating?: any;
  ratingQuantity?: number;
  currentPrice?: number;
  originalPrice?: number;
  discount?: number;
}

const TopCard: React.FC<TopCardProps> = (props) => {
  const [favorite, setFavorite] = useState(false);

  function setFavoriteProduct() {
    setFavorite(!favorite);
  }

  return (
    <div className="top-card">
      <img className="top-image" src={props.imageUrl} alt={props.productName} />
      <div className="top-card-container">
        <div className="upper-content">
          <div className="text-content">
            <h5 className="top-name">{props.productName}</h5>
            <p className="description">{props.description}</p>
          </div>
          <button className="heart-button" onClick={setFavoriteProduct}>
            <FontAwesomeIcon
              icon={favorite ? faFullHeart : faHeart}
              className={favorite ? "heart-button-active" : "heart-button"}
            ></FontAwesomeIcon>
          </button>
        </div>
        <div className="rating-container">
          <div className="rating">
            <FontAwesomeIcon icon={faStar} className="rating"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="rating"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="rating"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="rating"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="rating"></FontAwesomeIcon>
          </div>
          <span className="rating-quantity">({props.ratingQuantity})</span>
        </div>
        <div className="price-container">
          <span className="current-price">${props.currentPrice}</span>
          <span className="original-price">${props.originalPrice}</span>
          <span className="discount">{props.discount}%</span>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
