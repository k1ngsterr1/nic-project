import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./styles/search_results.css";

const illustration = require("../../assets/no_result.svg").default;

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
          <div className="container">
            <Header />
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
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default SearchResult;
