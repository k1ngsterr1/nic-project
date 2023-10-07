import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { fetchSpecificProduct } from "../../api/productsAPI/productsAPI";
import { Pagination, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles/product_details.css";
import { faHeart, faSpinner } from "@fortawesome/free-solid-svg-icons";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const { productId } = useParams<{ productId: any }>();
  const [product, setProduct] = useState<any | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  function selectSize(size: string) {
    setSelectedSize(size);
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await fetchSpecificProduct(productId);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return (
      <div className="loading-screen">
        <div className="loading-container">
          <FontAwesomeIcon
            className="spinner-icon"
            icon={faSpinner}
          ></FontAwesomeIcon>
        </div>
      </div>
    ); // Or any other loading indicator you prefer
  }

  return (
    <div className="screen">
      <div className="container">
        <Header />
      </div>
      <div className="product-gallery">
        <img src={product.image} alt={product.name} className="image" />
        <button className="favorite">
          <FontAwesomeIcon icon={faHeart} className="heart"></FontAwesomeIcon>
        </button>
        <div className="product-thumbs">
          <img
            src={product.image}
            alt={product.image}
            className="image-thumbs"
          ></img>
          <img
            src={product.image}
            alt={product.image}
            className="image-thumbs"
          ></img>
          <img
            src={product.image}
            alt={product.image}
            className="image-thumbs"
          ></img>
          <img
            src={product.image}
            alt={product.image}
            className="image-thumbs"
          ></img>
          <img
            src={product.image}
            alt={product.image}
            className="image-thumbs"
          ></img>
        </div>
      </div>
      <div className="product-container">
        <div className="title-heading-container">
          <h1 className="product-heading">{product.name}</h1>
          <span className="price">{product.price}$</span>
        </div>
        <div className="sizes-container">
          <span className="size">Size</span>
          <div className="size-buttons">
            <button className="size-button-inactive">XS</button>
            <button
              className={
                selectedSize === "S"
                  ? "size-button-choosen"
                  : "size-button-active"
              }
              onClick={() => selectSize("S")}
            >
              S
            </button>
            <button
              className={
                selectedSize === "M"
                  ? "size-button-choosen"
                  : "size-button-active"
              }
              onClick={() => selectSize("M")}
            >
              M
            </button>
            <button
              className={
                selectedSize === "L"
                  ? "size-button-choosen"
                  : "size-button-active"
              }
              onClick={() => selectSize("L")}
            >
              L
            </button>
            <button className="size-button-inactive">XL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
