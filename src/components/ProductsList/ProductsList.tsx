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
import { fetchProductsFromFirestore } from "../../api/productsAPI/productsAPI";

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
    const getProducts = async () => {
      try {
        const productsData = await fetchProductsFromFirestore();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
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
        slidesPerView={1}
        spaceBetween={-158}
      >
        {products
          .filter((product) => product.title !== "")
          .map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                productName={
                  product.title.length > maxLengthTitle
                    ? product.title.substring(0, maxLengthTitle - 3) + "..."
                    : product.title
                }
                fullProductName={product.title}
                imageUrl={product.image}
                rating={renderRating(product.rating.rate)}
                ratingQuantity={product.rating.count}
                description={
                  product.description.length > maxLengthDescription
                    ? product.description.substring(
                        0,
                        maxLengthDescription - 3
                      ) + "..."
                    : product.description
                }
                currentPrice={product.price}
                id={product.id}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="tablet-container">
        <div className="row-upper">
          {products
            .filter((product) => product.title !== "")
            .slice(0, 2)
            .map((product) => (
              <div className="card" key={product.id}>
                <ProductCard
                  productName={
                    product.title.length > maxLengthTitle
                      ? product.title.substring(0, maxLengthTitle - 3) + "..."
                      : product.title
                  }
                  fullProductName={product.title}
                  imageUrl={product.image}
                  rating={renderRating(product.rating.rate)}
                  ratingQuantity={product.rating.count}
                  description={
                    product.description.length > maxLengthDescription
                      ? product.description.substring(
                          0,
                          maxLengthDescription - 3
                        ) + "..."
                      : product.description
                  }
                  currentPrice={product.price}
                  id={product.id}
                />
              </div>
            ))}
        </div>
        <div className="row-upper">
          {products
            .filter((product) => product.title !== "")
            .slice(2, 4)
            .map((product) => (
              <div className="card" key={product.id}>
                <ProductCard
                  productName={
                    product.title.length > maxLengthTitle
                      ? product.title.substring(0, maxLengthTitle - 3) + "..."
                      : product.title
                  }
                  fullProductName={product.title}
                  imageUrl={product.image}
                  rating={renderRating(product.rating.rate)}
                  ratingQuantity={product.rating.count}
                  description={
                    product.description.length > maxLengthDescription
                      ? product.description.substring(
                          0,
                          maxLengthDescription - 3
                        ) + "..."
                      : product.description
                  }
                  currentPrice={product.price}
                  id={product.id}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="pc-container">
        {" "}
        <Swiper
          className="product-swiper-2"
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={-900}
        >
          {products
            .filter((product) => product.title !== "")
            .map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  productName={
                    product.title.length > maxLengthTitle
                      ? product.title.substring(0, maxLengthTitle - 3) + "..."
                      : product.title
                  }
                  fullProductName={product.title}
                  imageUrl={product.image}
                  rating={renderRating(product.rating.rate)}
                  ratingQuantity={product.rating.count}
                  description={
                    product.description.length > maxLengthDescription
                      ? product.description.substring(
                          0,
                          maxLengthDescription - 3
                        ) + "..."
                      : product.description
                  }
                  currentPrice={product.price}
                  id={product.id}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsList;
