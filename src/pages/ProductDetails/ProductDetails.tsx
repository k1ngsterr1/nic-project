import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSpinner,
  faChevronDown,
  faPlus,
  faMinus,
  faChevronUp,
  faCirclePlus,
  faBagShopping,
  faCaretRight,
  faCaretLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart as faEmptyHeart } from "@fortawesome/free-regular-svg-icons";

import { useParams } from "react-router-dom";
import { fetchSpecificProduct } from "../../api/productsAPI/productsAPI";
import { Pagination, Thumbs } from "swiper/modules";
import { Product } from "../../types";
import { useCart } from "../../contexts/CartContext";
import Footer from "../../components/Footer/Footer";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles/product_details.css";

SwiperCore.use([Thumbs]);

interface CardProps {
  image: string;
  title: string;
  price: string;
  addToCart: any;
}

const SimilarCard: React.FC<CardProps> = ({
  image,
  title,
  price,
  addToCart,
}) => {
  return (
    <div className="specific-card">
      <img src={image} alt={title} className="specific-card-img" />
      <div className="card-container">
        <h6 className="specific-card-heading">{title}</h6>
        <div className="prices-container">
          <span className="price">${price}</span>
          <span className="original-price">$129.99</span>
          <div className="discount">
            <span className="discount-percent">-40%</span>
          </div>
        </div>
        <button className="specific-card-btn" onClick={addToCart}>
          <span className="price-btn">${price}</span>
          <span className="btn-text">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

const example = require("../../assets/gallery_example.jpg");
const example_01 = require("../../assets/gallery_example01.jpg");
const example_02 = require("../../assets/gallery_example02.jpg");
const example_03 = require("../../assets/gallery_example03.jpg");
const example_04 = require("../../assets/gallery_example04.jpg");
const example_05 = require("../../assets/gallery_example05.jpg");

const example_pc = require("../../assets/gallery_example_pc.jpg");

const ProductDetails = () => {
  const maxLengthTitle = 20;

  const [cart, setCart] = useState<Product[]>([]);
  const { addToCart, removeFromCart } = useCart();

  const handleAddToCartClick = () => {
    addToCart(product);
  };

  const { productId } = useParams<{ productId: any }>();
  const [product, setProduct] = useState<any | null>(null);
  const [specificProducts, setSpecificProducts] = useState<any | null>(null);
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

    const fetchAnotherProduct = async () => {
      const maxCardQuantity = 4;
      const fetchedProductsArray = [];
      for (let i = 1; i <= maxCardQuantity; i++) {
        try {
          const productData = await fetchSpecificProduct(productId + i);
          // setSpecificProducts(productData);
          if (productData) {
            fetchedProductsArray.push(productData);
            console.log("fetched products array:", fetchedProductsArray);
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
      setSpecificProducts(fetchedProductsArray);
    };

    fetchProduct();
    fetchAnotherProduct();
  }, [productId]);

  if (!product && !specificProducts) {
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
      <Header />
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
          </div>
        </div>
        <div className="buttons">
          <button className="button shop">SHOP NOW</button>
          <button className="button basket" onClick={handleAddToCartClick}>
            <FontAwesomeIcon
              className="basket-icon"
              icon={faBagShopping}
            ></FontAwesomeIcon>
            ADD TO BASKET
          </button>
        </div>
        <div className="also-like">
          <div className="heading-buttons-container">
            <h5 className="section-heading-like">You might also like</h5>
            <div className="arrow-buttons">
              <button className="left-btn">
                <FontAwesomeIcon
                  className="arrow-icon"
                  icon={faCaretLeft}
                ></FontAwesomeIcon>
              </button>
              <figure className="separator-btn"></figure>
              <button className="right-btn">
                <FontAwesomeIcon
                  className="arrow-icon"
                  icon={faCaretRight}
                ></FontAwesomeIcon>
              </button>
            </div>
          </div>
          <div className="similar-products">
            {specificProducts &&
              specificProducts.map((product: any, index: any) => {
                if (
                  !product ||
                  !product.image ||
                  !product.title ||
                  typeof product.price !== "number"
                ) {
                  return null;
                }

                const title =
                  product.title.length > maxLengthTitle
                    ? product.title.substring(0, maxLengthTitle - 3) + "..."
                    : product.title;

                return (
                  <SimilarCard
                    key={index}
                    title={title}
                    image={product.image}
                    price={product.price.toString()}
                    addToCart={handleAddToCartClick}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div className="adaptive-gallery">
        <div className="adaptive-gallery-container">
          <div className="products-photo">
            <div className="bread-dots">
              <a className="link" href="/">
                Homepage
              </a>
              <FontAwesomeIcon className="chevron" icon={faChevronRight} />
              <a className="link" href="/">
                Women
              </a>
              <FontAwesomeIcon className="chevron" icon={faChevronRight} />
              <a className="link" href="/">
                Clothes
              </a>
              <FontAwesomeIcon className="chevron" icon={faChevronRight} />
              <a className="link" href="/">
                Zara
              </a>
            </div>
            <div className="photos">
              <div className="thumbs">
                <img src={example_01} alt="thumbnail" className="thumb " />
                <img src={example_02} alt="thumbnail" className="thumb low" />
                <img src={example_03} alt="thumbnail" className="thumb low" />
                <img src={example_04} alt="thumbnail" className="thumb low" />
                <img src={example_05} alt="thumbnail" className="thumb low" />
              </div>
              <img className="main-photo" src={example} alt="main-phot"></img>
            </div>
          </div>
          <div className="products-info">
            <div className="title-and-favorite">
              <div className="title-container">
                <h1 className="title-name">Short Printed Dress</h1>
                <span className="price">$39.99</span>
              </div>
              <button className="favorite-btn">
                <FontAwesomeIcon
                  className="heart"
                  icon={faHeart}
                ></FontAwesomeIcon>
              </button>
            </div>
            <div className="sizes-container">
              <span className="size-text">
                <strong>Size</strong>
              </span>
              <div className="sizes">
                <div className="sizes-upper-row">
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
                </div>
                <div className="sizes-upper-row last">
                  <button className="size-button-inactive">XL</button>
                </div>
                <div className="guideline">
                  <strong>See guideline</strong>
                </div>
              </div>
            </div>
            <div className="color-container">
              <span className="color-text">
                <strong>Color</strong>
              </span>
              <div className="colors">
                <div className="color brown"></div>
                <div className="color green"></div>
                <div className="color blue"></div>
                <div className="color orange"></div>
              </div>
            </div>
            <div className="shipping-container">
              <span className="shipping-text">
                <strong>Shipping</strong>
              </span>
              <div className="shipping-titles">
                <span className="territory">
                  Free Shipping to Victoria
                  <FontAwesomeIcon
                    className="chevron-down"
                    icon={faChevronDown}
                  ></FontAwesomeIcon>
                </span>
                <span className="delivery">Delivery Time: 14–17 days</span>
              </div>
            </div>
            <div className="quantity-container">
              <span className="quantity-text">
                <strong>Quantity</strong>
              </span>
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
            <div className="price-container">
              <div className="price-container-content">
                <span className="price">$79.98</span>
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
              </div>
            </div>
            <div className="buttons">
              <button className="button shop">SHOP NOW</button>
              <button className="button basket" onClick={handleAddToCartClick}>
                ADD TO BASKET
              </button>
            </div>
          </div>
        </div>
        <div className="product-details-container-tab">
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
                <div className="description-list">
                  <span className="list-elem top">Length | Regular</span>
                  <span className="list-elem el">Pattern | Floral</span>
                  <span className="list-elem el">Size | 38</span>
                  <span className="list-elem el">Fit | Regular fit</span>
                  <span className="list-elem el">Age group | Adult</span>
                  <span className="list-elem el">Leg opening | Wide leg</span>
                  <span className="list-elem el">
                    Sleeve length | Long sleeve
                  </span>
                  <span className="list-elem el">Package contents | 2 pcs</span>
                </div>
              </section>
            </div>
            <div className="details-column second-column">
              <section className="column-section">
                <strong className="section-text">Composition</strong>
                <p className="paragraph">
                  We work with monitoring programmes to ensure compliance with
                  our social, environmental and health and safety standards for
                  our products. To assess compliance, we have developed a
                  programme of audits and continuous improvement plans. OUTER
                  SHELL 90% cotton10% linen
                </p>
              </section>
              <section className="column-section two-s">
                <strong className="section-text">Care instructions</strong>
                <div className="description-list care">
                  <span className="list-elem top">
                    Machine wash at max. 30ºC/86ºF with short spin cycle
                  </span>
                  <span className="list-elem el">
                    Iron at a maximum of 110ºC/230ºF
                  </span>
                  <span className="list-elem el">Size | 38</span>
                  <span className="list-elem el">Do not dry clean</span>
                  <span className="list-elem el">Do not tumble dry</span>
                  <span className="list-elem el">Wash inside out</span>
                  <span className="list-elem el">Wash separately</span>
                </div>
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

          <div className="also-like">
            <div className="heading-buttons-container">
              <h5 className="section-heading-like">You might also like</h5>
              <div className="arrow-buttons">
                <button className="left-btn">
                  <FontAwesomeIcon
                    className="arrow-icon"
                    icon={faCaretLeft}
                  ></FontAwesomeIcon>
                </button>
                <figure className="separator-btn"></figure>
                <button className="right-btn">
                  <FontAwesomeIcon
                    className="arrow-icon"
                    icon={faCaretRight}
                  ></FontAwesomeIcon>
                </button>
              </div>
            </div>
            <div className="similar-products">
              <div className="column">
                {specificProducts &&
                  specificProducts
                    .slice(0, 2)
                    .map((product: any, index: any) => {
                      if (
                        !product ||
                        !product.image ||
                        !product.title ||
                        typeof product.price !== "number"
                      ) {
                        return null;
                      }

                      const title =
                        product.title.length > maxLengthTitle
                          ? product.title.substring(0, maxLengthTitle - 3) +
                            "..."
                          : product.title;

                      return (
                        <SimilarCard
                          key={index}
                          title={title}
                          image={product.image}
                          price={product.price.toString()}
                          addToCart={handleAddToCartClick}
                        />
                      );
                    })}
              </div>
              <div className="column">
                {specificProducts &&
                  specificProducts
                    .slice(2, 4)
                    .map((product: any, index: any) => {
                      if (
                        !product ||
                        !product.image ||
                        !product.title ||
                        typeof product.price !== "number"
                      ) {
                        return null;
                      }

                      const title =
                        product.title.length > maxLengthTitle
                          ? product.title.substring(0, maxLengthTitle - 3) +
                            "..."
                          : product.title;

                      return (
                        <SimilarCard
                          key={index}
                          title={title}
                          image={product.image}
                          price={product.price.toString()}
                          addToCart={handleAddToCartClick}
                        />
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="adaptive-gallery-pc">
        <div className="adaptive-gallery-container">
          <div className="products-photo">
            <div className="bread-dots">
              <a className="link" href="/">
                Homepage
              </a>
              <FontAwesomeIcon className="chevron" icon={faChevronRight} />
              <a className="link" href="/">
                Women
              </a>
              <FontAwesomeIcon className="chevron" icon={faChevronRight} />
              <a className="link" href="/">
                Clothes
              </a>
              <FontAwesomeIcon className="chevron" icon={faChevronRight} />
              <a className="link" href="/">
                Zara
              </a>
            </div>
            <div className="photos">
              <div className="thumbs">
                <img src={example_01} alt="thumbnail" className="thumb " />
                <img src={example_02} alt="thumbnail" className="thumb low" />
                <img src={example_03} alt="thumbnail" className="thumb low" />
                <img src={example_04} alt="thumbnail" className="thumb low" />
                <img src={example_05} alt="thumbnail" className="thumb low" />
              </div>
              <img
                className="main-photo"
                src={example_pc}
                alt="main-phot"
              ></img>
            </div>
          </div>
          <div className="products-info">
            <div className="title-and-favorite">
              <div className="title-container">
                <h1 className="title-name">Short Printed Dress</h1>
                <span className="price">$39.99</span>
              </div>
              <button className="favorite-btn">
                <FontAwesomeIcon
                  className="heart"
                  icon={faHeart}
                ></FontAwesomeIcon>
              </button>
            </div>
            <div className="sizes-container">
              <span className="size-text">
                <strong>Size</strong>
              </span>
              <div className="sizes">
                <div className="sizes-upper-row">
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
                {/* <div className="sizes-upper-row last"></div> */}
                <div className="guideline">
                  <strong>See guideline</strong>
                </div>
              </div>
            </div>
            <div className="color-container">
              <span className="color-text">
                <strong>Color</strong>
              </span>
              <div className="colors">
                <div className="color brown"></div>
                <div className="color green"></div>
                <div className="color blue"></div>
                <div className="color orange"></div>
              </div>
            </div>
            <div className="shipping-container">
              <span className="shipping-text">
                <strong>Shipping</strong>
              </span>
              <div className="shipping-titles">
                <span className="territory">
                  Free Shipping to Victoria
                  <FontAwesomeIcon
                    className="chevron-down"
                    icon={faChevronDown}
                  ></FontAwesomeIcon>
                </span>
                <span className="delivery">Delivery Time: 14–17 days</span>
              </div>
            </div>
            <div className="quantity-container">
              <span className="quantity-text">
                <strong>Quantity</strong>
              </span>
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
            <div className="price-container">
              <div className="price-container-content">
                <span className="price">$79.98</span>
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
              </div>
            </div>
            <div className="buttons">
              <button className="button shop">SHOP NOW</button>
              <button className="button basket" onClick={handleAddToCartClick}>
                ADD TO BASKET
              </button>
            </div>
          </div>
        </div>
        <div className="product-details-container-tab">
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
                <div className="description-list">
                  <span className="list-elem top">Length | Regular</span>
                  <span className="list-elem el">Pattern | Floral</span>
                  <span className="list-elem el">Size | 38</span>
                  <span className="list-elem el">Fit | Regular fit</span>
                  <span className="list-elem el">Age group | Adult</span>
                  <span className="list-elem el">Leg opening | Wide leg</span>
                  <span className="list-elem el">
                    Sleeve length | Long sleeve
                  </span>
                  <span className="list-elem el">Package contents | 2 pcs</span>
                </div>
              </section>
            </div>
            <div className="details-column second-column">
              <section className="column-section">
                <strong className="section-text">Composition</strong>
                <p className="paragraph">
                  We work with monitoring programmes to ensure compliance with
                  our social, environmental and health and safety standards for
                  our products. To assess compliance, we have developed a
                  programme of audits and continuous improvement plans. OUTER
                  SHELL 90% cotton10% linen
                </p>
              </section>
              <section className="column-section two-s">
                <strong className="section-text">Care instructions</strong>
                <div className="description-list care">
                  <span className="list-elem top">
                    Machine wash at max. 30ºC/86ºF with short spin cycle
                  </span>
                  <span className="list-elem el">
                    Iron at a maximum of 110ºC/230ºF
                  </span>
                  <span className="list-elem el">Size | 38</span>
                  <span className="list-elem el">Do not dry clean</span>
                  <span className="list-elem el">Do not tumble dry</span>
                  <span className="list-elem el">Wash inside out</span>
                  <span className="list-elem el">Wash separately</span>
                </div>
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
          <div className="also-like">
            <div className="heading-buttons-container">
              <h5 className="section-heading-like">You might also like</h5>
              <div className="arrow-buttons">
                <button className="left-btn">
                  <FontAwesomeIcon
                    className="arrow-icon"
                    icon={faCaretLeft}
                  ></FontAwesomeIcon>
                </button>
                <figure className="separator-btn"></figure>
                <button className="right-btn">
                  <FontAwesomeIcon
                    className="arrow-icon"
                    icon={faCaretRight}
                  ></FontAwesomeIcon>
                </button>
              </div>
            </div>
            <div className="similar-products">
              <div className="row">
                {specificProducts &&
                  specificProducts
                    .slice(0, 4)
                    .map((product: any, index: any) => {
                      if (
                        !product ||
                        !product.image ||
                        !product.title ||
                        typeof product.price !== "number"
                      ) {
                        return null;
                      }

                      const title =
                        product.title.length > maxLengthTitle
                          ? product.title.substring(0, maxLengthTitle - 3) +
                            "..."
                          : product.title;

                      return (
                        <SimilarCard
                          key={index}
                          title={title}
                          image={product.image}
                          price={product.price.toString()}
                          addToCart={handleAddToCartClick}
                        />
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
