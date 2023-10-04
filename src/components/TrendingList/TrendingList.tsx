import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { faChevronRight, faDolly } from "@fortawesome/free-solid-svg-icons";

import Axios from "axios";
import SwiperCore from "swiper";
import TrendingCard from "./TrendingCard/TrendingCard";

import "./styles/trending_list.css";

type Swiper = any;

SwiperCore.use([Navigation, Pagination]);

const TrendingList = () => {
  const [trendingProduct, setTrendingProduct] = useState<any[]>([]);

  const maxLengthTitle = 20;
  const maxLengthDescription = 26;

  const card01 = require("../../assets/card_01.jpg");
  const card02 = require("../../assets/card_02.jpg");
  const card03 = require("../../assets/card_03.jpg");

  const swiperRef = React.useRef<Swiper | null>(null);

  return (
    <div className="trending-list">
      <div className="heading-container">
        <h2 className="section-heading">Trending must have</h2>
        <button className="view-btn">
          <span className="view">View all</span>
          <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />
        </button>
      </div>
      <Swiper
        className="trending-swiper"
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={0}
      >
        <SwiperSlide>
          <TrendingCard
            imageUrl={card01}
            title="Cool & Sexy Gucci"
            description="Fashionable sportwear"
            price="$89"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TrendingCard
            imageUrl={card02}
            title="Cool & Sexy Gucci"
            description="Fashionable sportwear"
            price="$89"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TrendingCard
            imageUrl={card03}
            title="Cool & Sexy Gucci"
            description="Fashionable sportwear"
            price="$89"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TrendingList;
