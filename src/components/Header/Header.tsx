import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "hamburger-react";
import Cart from "./Cart/Cart";
import SearchBar from "./SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

import "./styles/header.css";

const logo = require("../../assets/Logo.svg").default;

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  function mainNavigate() {
    navigate("/");
  }

  const categories = [
    { value: "all", label: "All categories" },
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
    // ... more categories
  ];

  const handleSearch = (query: string, category: string) => {
    console.log(`Searching for ${query} in ${category} category.`);
  };

  return (
    <header>
      <div className="upper-content">
        <Hamburger
          color="#023047"
          size={21}
          toggle={setOpen}
          toggled={isOpen}
          onToggle={() => navigate("/menu")}
        ></Hamburger>
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={mainNavigate}
        ></img>
        <Cart></Cart>
      </div>
      <div className="lower-content">
        <SearchBar onSearch={handleSearch} categories={categories} />
      </div>
    </header>
  );
};

export default Header;
