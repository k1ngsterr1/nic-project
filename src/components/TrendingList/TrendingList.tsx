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

  const horizontal_card01 = require("../../assets/horizontal_img.jpg");
  const horizontal_card02 = require("../../assets/horizontal_img_2.jpg");
  const horizontal_card03 = require("../../assets/horizontal_img_3.jpg");

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
      <div className="trending-list-tablet">
        <TrendingCard
          imageUrl={horizontal_card01}
          title="Cool & Sexy Calvin Klein"
          description="Dotted dress-Casual"
          price="$89"
        />
        <TrendingCard
          imageUrl={horizontal_card02}
          title="Cool & Sexy Calvin Klein"
          description="Dotted dress-Casual"
          price="$89"
        />
        <TrendingCard
          imageUrl={horizontal_card03}
          title="Beige Coat Zara"
          description="Cream-Brown-Formal"
          price="$102"
        />
      </div>
    </div>
  );
};

export default TrendingList;
