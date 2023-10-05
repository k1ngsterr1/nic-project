import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { faChevronRight, faDolly } from "@fortawesome/free-solid-svg-icons";
import TopCard from "./TopCard/TopCard";

import "./styles/top_list.css";
const card01 = require("../../assets/top_card01.jpg");
const card02 = require("../../assets/top_card02.jpg");
const card03 = require("../../assets/top_card03.jpg");
const card04 = require("../../assets/top_card04.jpg");

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
      <Swiper
        className="top-swiper"
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={-60}
      >
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
        <SwiperSlide>
          <TopCard
            imageUrl={card02}
            productName="Zara"
            description="Midi top - Daily fit"
            ratingQuantity={523}
            currentPrice={95}
            originalPrice={145}
            discount={7}
          ></TopCard>
        </SwiperSlide>
        <SwiperSlide>
          <TopCard
            imageUrl={card03}
            productName="Uniqlo"
            description="Midi atlas Slim fit - bohemian"
            ratingQuantity={86}
            currentPrice={125}
            originalPrice={156}
            discount={8}
          ></TopCard>
        </SwiperSlide>
        <SwiperSlide>
          <TopCard
            imageUrl={card04}
            productName="Mango dress"
            description="Kimono & Caftan - Colorful - Night club fit"
            ratingQuantity={121}
            currentPrice={365}
            originalPrice={487}
            discount={15}
          ></TopCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopList;
