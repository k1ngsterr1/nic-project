import React from "react";
import Header from "../../components/Header/Header";
import ProductSpotlight from "../../components/Spotlight/ProductSpotlight";
import ProductsList from "../../components/ProductsList/ProductsList";
import TrendingList from "../../components/TrendingList/TrendingList";
import Footer from "../../components/Footer/Footer";
import TopList from "../../components/TopList/TopList";
import MainBanner from "../../components/MainBanner/MainBanner";

import "./styles/main_page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const spotlightImage01 = require("../../assets/category_01.jpg");
const spotlightImage02 = require("../../assets/category_02.jpg");
const spotlightTablet01 = require("../../assets/tablet_01.jpg");
const spotlightTablet02 = require("../../assets/tablet_02.jpg");
const spotlightTablet03 = require("../../assets/tablet_03.jpg");
const spotlightTablet04 = require("../../assets/tablet_04.jpg");

const iphone = require("../../assets/Iphone.png");

const MainPage = () => {
  return (
    <div className="screen">
      <Header />
      <MainBanner />
      <div className="container">
        <main className="main-content">
          <ProductSpotlight
            image={spotlightImage01}
            heading="Never-Ending Summer"
            additionalText="Throwback Shirts & all-day dressed"
            button="Exlopre all category"
            backgroundColor="red"
          />
          <ProductSpotlight
            image={spotlightImage02}
            heading="Best Lovin Sellers"
            additionalText="Bikini & Poolside glam include"
            button="Exlopre all category"
            backgroundColor="blue"
            marginTop="clamp(10px,4.6728vw,40px)"
          />
        </main>
        <ProductsList />
        <TrendingList />
        <TopList />
      </div>
      <div className="spotlight-row">
        <ProductSpotlight
          image={spotlightTablet01}
          heading="Never-Ending Summer"
          additionalText="Throwback Shirts & all-day dressed"
          button="Exlopre all category"
          backgroundColor="red"
        />
        <ProductSpotlight
          image={spotlightTablet02}
          heading="Best Lovin Sellers"
          additionalText="Bikini & Poolside glam include"
          button="Exlopre all category"
          backgroundColor="blue"
          marginTop="clamp(10px,4.6728vw,40px)"
        />
      </div>
      <div className="advertisment-row">
        <FontAwesomeIcon className="chevron left" icon={faChevronLeft} />
        <div className="centered-container">
          <div className="text-content">
            <span className="ad-heading">MagSafe</span>
            <span className="text">
              Snap on a magnetic case, wallet, or both. And get faster wireless
              charging.
            </span>
          </div>
          <img src={iphone} className="iphone-img" alt="iphone" />
        </div>
        <FontAwesomeIcon className="chevron right" icon={faChevronRight} />
      </div>
      <div className="spotlight-row ">
        <ProductSpotlight
          image={spotlightTablet03}
          heading="The Pinky Barbie Edition"
          additionalText="Lets play dress up"
          button="Exlopre all category"
          bgStyles="#D11FB5"
        ></ProductSpotlight>
        <ProductSpotlight
          image={spotlightTablet04}
          heading="Best Sellers Everyone Love"
          additionalText="poolside glam include"
          button="Exlopre all category"
          bgStyles="#0186C4"
        ></ProductSpotlight>
      </div>
      {/* <div className="email-input-container">
        <span className="email-heading">Luminae Store</span>
        <span className="email-paragraph">
          Register your email not to miss the last minutes off+ Free delivery
        </span>
        <input
          type="email"
          className="email-input"
          placeholder="Enter your email"
        />
      </div> */}
      <Footer />
    </div>
  );
};

export default MainPage;
