import React from "react";

import "./styles/spotlight.css";

interface SpotLightProps {
  image: string;
  heading: string;
  additionalText: string;
  button: string;
  backgroundColor: string;
  marginTop?: string;
}

const ProductSpotlight: React.FC<SpotLightProps> = ({
  image,
  heading,
  additionalText,
  button,
  backgroundColor,
  marginTop,
}) => {
  return (
    <div
      className={`spotlight ${backgroundColor}`}
      style={{ marginTop: marginTop }}
    >
      <div className="spotlight-content">
        <h4 className="category-heading">{heading}</h4>
        <span className="sub-category-text">{additionalText}</span>
        <button className="spotlight-button">{button}</button>
      </div>
      <img className="spotlight-image" src={image} alt="spotlight image" />
    </div>
  );
};

export default ProductSpotlight;
