import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { fetchSpecificProduct } from "../../api/productsAPI/productsAPI";
import { Pagination, Thumbs } from "swiper/modules";
import Footer from "../../components/Footer/Footer";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles/product_details.css";
import {
  faHeart,
  faSpinner,
  faChevronDown,
  faPlus,
  faMinus,
  faChevronUp,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const { productId } = useParams<{ productId: any }>();
  const [product, setProduct] = useState<any | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  function selectSize(size: string) {
    setSelectedSize(size);
  }

  function plusQuantity() {
    setQuantity(quantity + 1);
  }

  function minusQuantity() {
    setQuantity(quantity - 1);

    if (quantity == 1) {
      setQuantity(1);
    }
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
    );
  }

  return (
    <div className="screen">
      <div className="container">
        <Header />
      </div>
      <div className="product-gallery">
        <img src={product.image} alt={product.title} className="image" />
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
          <h1 className="product-heading">{product.title}</h1>
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
        <h3 className="guideline">Size guideline</h3>
        <div className="product-details">
          <div className="colors-container">
            <span className="color">Color</span>
            <div className="colors">
              <button className="color-btn red"></button>
              <button className="color-btn green"></button>
              <button className="color-btn blue"></button>
              <button className="color-btn orange"></button>
            </div>
          </div>
          <div className="shipping-container">
            <span className="shipping-text">Shipping</span>
            <span className="shipping-selector">
              Free Shipping to Victoria teritory{" "}
              <FontAwesomeIcon
                className="chevron"
                icon={faChevronDown}
              ></FontAwesomeIcon>
            </span>
          </div>
          <div className="quantity-container">
            <span className="quantity-text">Quantity</span>
            <div className="quantity-counter">
              <FontAwesomeIcon
                className="quantity-icon minus"
                icon={faMinus}
                onClick={minusQuantity}
              ></FontAwesomeIcon>
              <span className="quantity">{quantity}</span>
              <FontAwesomeIcon
                className="quantity-icon plus"
                icon={faPlus}
                onClick={plusQuantity}
              ></FontAwesomeIcon>
            </div>
            <span className="available">50 available / 104 solid</span>
          </div>
        </div>
      </div>
      <div className="product-details-container">
        <div className="tabs-container">
          <button className="product-tab active">Product details</button>
          <button className="product-tab inactive">Reviews (5)</button>
          <button className="product-tab inactive">Shipping & Payment</button>
        </div>
        <figure className="separator"></figure>
        <div className="details-content">
          <div className="details-column">
            <section className="column-section">
              <strong className="section-text">Product Description</strong>
              <p className="paragraph">
                Short dress with a plunging V-neckline and tie detail. Wide
                sleeves falling below the elbow. Contrast bead details.
                Invisible back zip fastening.
              </p>
            </section>
            <section className="column-section two">
              <strong className="section-text">Product Description</strong>
              <ol className="description-list">
                <li className="list-elem">Length | Regular</li>
                <li className="list-elem">Pattern | Floral</li>
                <li className="list-elem">Size | 38</li>
                <li className="list-elem">Fit | Regular fit</li>
                <li className="list-elem">Age group | Adult</li>
                <li className="list-elem">Leg opening | Wide leg</li>
                <li className="list-elem">Sleeve length | Long sleeve</li>
                <li className="list-elem">Package contents | 2 pcs</li>
              </ol>
            </section>
          </div>
          <div className="details-column">
            <section className="column-section">
              <strong className="section-text">Composition</strong>
              <p className="paragraph">
                We work with monitoring programmes to ensure compliance with our
                social, environmental and health and safety standards for our
                products. To assess compliance, we have developed a programme of
                audits and continuous improvement plans. OUTER SHELL 90%
                cotton10% linen
              </p>
            </section>
            <section className="column-section two-s">
              <strong className="section-text">Care instructions</strong>
              <ol className="description-list care">
                <li className="list-elem">
                  Machine wash at max. 30ºC/86ºF with short spin cycle
                </li>
                <li className="list-elem">Iron at a maximum of 110ºC/230ºF</li>
                <li className="list-elem">Size | 38</li>
                <li className="list-elem">Do not dry clean</li>
                <li className="list-elem">Do not tumble dry</li>
                <li className="list-elem">Wash inside out</li>
                <li className="list-elem">Wash separately</li>
              </ol>
            </section>
          </div>
        </div>
        <div className="lower-separator-container">
          <figure className="separator-l"></figure>
          <div className="show-less">
            <FontAwesomeIcon
              className="arrow-icon"
              icon={faChevronUp}
            ></FontAwesomeIcon>
            SHOW LESS
          </div>
          <figure className="separator-l"></figure>
        </div>
        <div className="price-tab">
          <div className="price-tab-content">
            <h5 className="price-tab-heading">${product.price}</h5>
            <figure className="separator"></figure>
            <div className="price-tab-lower">
              <FontAwesomeIcon
                className="plus-icon-c"
                icon={faCirclePlus}
              ></FontAwesomeIcon>
              <span className="text">
                Add shipping insurance for $9{" "}
                <span className="small">
                  ( declared value only if the package gets lost, stolen or
                  damaged.)
                </span>
              </span>
            </div>
            <div className="buttons">
              <button></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
