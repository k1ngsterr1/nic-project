import React from "react";
import Header from "../../components/Header/Header";
import ProductSpotlight from "../../components/Spotlight/ProductSpotlight";

const spotlightImage01 = require("../../assets/category_01.jpg");
const spotlightImage02 = require("../../assets/category_02.jpg");

const MainPage = () => {
  return (
    <div className="screen">
      <div className="container">
        <Header></Header>
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
      </div>
    </div>
  );
};

export default MainPage;
