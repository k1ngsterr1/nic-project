import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./styles/trending_list.css";

const TrendingList = () => {
  return (
    <div className="trending-list">
      <div className="heading-container">
        <h2 className="section-heading">Trending must have</h2>
        <button className="view-btn">
          <span className="view">View all</span>
          <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />
        </button>
      </div>
    </div>
  );
};

export default TrendingList;
