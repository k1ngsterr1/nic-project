import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faStar } from "@fortawesome/free-solid-svg-icons";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./styles/search_results.css";

interface CardProps {
  image: string;
  title: string;
  price: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.image} className="card-img" />
      <div className="card-content">
        <span className="card-title">{props.title}</span>
        <div className="rating-container">
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
        </div>
        <span className="price">{props.price}</span>
      </div>
    </div>
  );
};

const illustration = require("../../assets/no_result.svg").default;
const photo01 = require("../../assets/camera_01.png");
const photo02 = require("../../assets/camera_02.png");
const photo03 = require("../../assets/camera_03.png");

const SearchResult = (props: any) => {
  const location = useLocation();

  const results = location.state?.results;

  return (
    <div>
      {results && results.length > 0 ? (
        results.map((product: any) => (
          <div key={product.id}>
            {/* Render product details here */}
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            {/* ... */}
          </div>
        ))
      ) : (
        <div className="screen">
          <Header />
          <div className="container">
            <main className="main-content">
              <img
                className="no-results"
                src={illustration}
                alt="illustration"
              />
              <div className="attention-window">
                <span className="window-heading">
                  No results were found for searching "title here"
                </span>
                <div className="attention-row">
                  <FontAwesomeIcon
                    className="attention-icon"
                    icon={faCircleExclamation}
                  ></FontAwesomeIcon>
                  <span className="icon-text">
                    We recommend you to search different clear key words to get
                    the best result.
                  </span>
                </div>
                <div className="attention-row next">
                  <FontAwesomeIcon
                    className="attention-icon"
                    icon={faCircleExclamation}
                  ></FontAwesomeIcon>
                  <span className="icon-text">
                    You can see the most related purchased products bellow.
                  </span>
                </div>
              </div>
            </main>
            <main className="tablet-content">
              <div className="tablet-container">
                <img
                  className="illustration"
                  src={illustration}
                  alt="illustration"
                />
                <div className="attention-window">
                  <span className="window-heading">
                    No results were found for searching "title here"
                  </span>
                  <div className="attention-row">
                    <FontAwesomeIcon
                      className="attention-icon"
                      icon={faCircleExclamation}
                    ></FontAwesomeIcon>
                    <span className="icon-text">
                      We recommend you to search different clear key words to
                      get the best result.
                    </span>
                  </div>
                  <div className="attention-row next">
                    <FontAwesomeIcon
                      className="attention-icon"
                      icon={faCircleExclamation}
                    ></FontAwesomeIcon>
                    <span className="icon-text">
                      You can see the most related purchased products bellow.
                    </span>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div className="possible-products">
            <div className="cards">
              <Card
                image={photo01}
                title="INSTAX Wide 300 Black"
                price="$82.99"
              />
              <Card
                image={photo02}
                title="INSTAX Square SQ1 Chalk"
                price="$112.99"
              />
              <Card
                image={photo03}
                title="INSTAX Wide 300 Black"
                price="$109"
              />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default SearchResult;
