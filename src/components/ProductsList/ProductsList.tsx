import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  faChevronRight,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

import Axios from "axios";
import SwiperCore from "swiper";
import ProductCard from "./ProductCard/ProductCard";

import "./styles/products_list.css";

type Swiper = any;

SwiperCore.use([Navigation, Pagination]);

const ProductsList = () => {
  const [products, setProducts] = useState<any[]>([]);

  const maxLengthTitle = 20;
  const maxLengthDescription = 26;

  const swiperRef = React.useRef<Swiper | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const renderRating = (rate: number) => {
    const fullStars = Math.floor(rate);
    const halfStars = rate % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array.from({ length: fullStars }).map((_, i) => (
          <FontAwesomeIcon
            key={`full-${i}`}
            icon={faStar}
            className="full-star"
          />
        ))}
        {halfStars ? (
          <FontAwesomeIcon
            key="half"
            icon={faStarHalfStroke}
            className="half-star"
          />
        ) : null}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <FontAwesomeIcon
            key={`empty-${i}`}
            icon={faEmptyStar}
            className="empty-star"
          />
        ))}
      </>
    );
  };

  return (
    <div className="products-list">
      <div className="heading-container">
        <h2 className="section-heading">Flash Sales</h2>
        <div className="view-btn">
          <span className="view">View all</span>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="chevron-icon"
          ></FontAwesomeIcon>
        </div>
      </div>
      <Swiper
        className="product-swiper"
        direction="horizontal"
        slidesPerView={2}
        spaceBetween={64}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              productName={
                product.title.length > maxLengthTitle
                  ? product.title.substring(0, maxLengthTitle - 3) + "..."
                  : product.title
              }
              imageUrl={product.image}
              rating={renderRating(product.rating.rate)}
              ratingQuantity={product.rating.count}
              description={
                product.description.length > maxLengthDescription
                  ? product.description.substring(0, maxLengthDescription - 3) +
                    "..."
                  : product.description
              }
              currentPrice={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsList;
