import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faDolly } from "@fortawesome/free-solid-svg-icons";

import "./styles/trending_card.css";

interface TrendingCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

const CardLabel = () => {
  return (
    <div className="label">
      <div className="label-content">
        <FontAwesomeIcon icon={faDolly} className="dolly-icon" />
        <span className="label-text">New Arivals</span>
      </div>
    </div>
  );
};

const TrendingCard: React.FC<TrendingCardProps> = (props) => {
  return (
    <div className="trending-card">
      <img className="card-image" src={props.imageUrl} alt={props.title}></img>
      <div className="card-lower-container">
        <div className="lower-content">
          <div className="title-description">
            <span className="title">{props.title}</span>
            <p className="description">{props.description}</p>
          </div>
          <button className="shop-btn">
            <div className="btn-content">
              <span className="price">{props.price}</span>
              <span className="text">Shop Now</span>
            </div>
          </button>
        </div>
      </div>
      <CardLabel></CardLabel>
    </div>
  );
};

export default TrendingCard;
