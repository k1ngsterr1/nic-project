import React from "react";
import Header from "../../components/Header/Header";
import ProductSpotlight from "../../components/Spotlight/ProductSpotlight";
import ProductsList from "../../components/ProductsList/ProductsList";
import TrendingList from "../../components/TrendingList/TrendingList";
import Footer from "../../components/Footer/Footer";
import TopList from "../../components/TopList/TopList";
import MainBanner from "../../components/MainBanner/MainBanner";

const spotlightImage01 = require("../../assets/category_01.jpg");
const spotlightImage02 = require("../../assets/category_02.jpg");

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
      <Footer />
    </div>
  );
};

export default MainPage;
