import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { faChevronRight, faDolly } from "@fortawesome/free-solid-svg-icons";
import TopCard from "./TopCard/TopCard";

import "./styles/top_list.css";
const card01 = require("../../assets/card_01.jpg");

const TopList = () => {
  return (
    <div className="top-list">
      <div className="heading-container">
        <h2 className="section-heading">Top 100</h2>
        <div className="view-btn">
          <span className="view">View all</span>
          <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />
        </div>
      </div>
      <Swiper className="top-swiper">
        <SwiperSlide>
          <TopCard
            imageUrl={card01}
            productName="Mango"
            description="Kimono & Caftan - Black - Regular fit"
            ratingQuantity={124}
            currentPrice={70}
            originalPrice={140}
            discount={50}
          ></TopCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopList;
