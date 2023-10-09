import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import "./styles/banner.css";

const bannerImage = require("../../assets/banner_img.jpg");

const MainBanner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} className="banner-img" alt="banner" />
      <div className="banner-content">
        <h1 className="banner-heading">Kimonos, Caftans & Pareos</h1>
        <p className="banner-paragraph">Poolside glam included From $4.99</p>
        <button className="banner-btn">
          <FontAwesomeIcon
            className="icon"
            icon={faShoppingBag}
          ></FontAwesomeIcon>
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default MainBanner;
