import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Hamburger from "hamburger-react";
import Cart from "./Cart/Cart";
import SearchBar from "./SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import "./styles/header.css";

const logo = require("../../assets/Logo.svg").default;
const categoriesLogo = require("../../assets/categories.svg").default;

const Header = () => {
  const categories = [
    { value: "all", label: "All categories" },
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
  ];

  const navigate = useNavigate();
  const [selectedCurrency, setSelectedCurrency] = useState<OptionType | null>(
    categories[0]
  );
  const [isOpen, setOpen] = useState(false);

  function mainNavigate() {
    navigate("/");
  }

  const optionsCurrency = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "KZT", label: "KZT" },
  ];

  const handleSearch = (query: string, category: string) => {
    console.log(`Searching for ${query} in ${category} category.`);
  };

  return (
    <header>
      <div className="mobile-header">
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
      </div>
      <div className="tablet-header">
        <div className="upper-content">
          <img src={logo} alt="logotype" className="logo" />
          <SearchBar onSearch={handleSearch} categories={categories} />
        </div>
        <nav className="nav-container">
          <div className="links">
            <a href="/" className="link">
              About us
            </a>
            <a href="/" className="link next">
              Blog
            </a>
            <a href="/" className="link next">
              Contact us
            </a>
            <a href="/" className="link next">
              Help & support
            </a>
          </div>
          <div className="social">
            <a href="" className="social-link">
              <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            </a>
            <a href="" className="social-link fb">
              <FontAwesomeIcon className="social-icon" icon={faFacebook} />
            </a>
            <a href="" className="social-link">
              <FontAwesomeIcon className="social-icon" icon={faTelegram} />
            </a>
          </div>
        </nav>
        <div className="lower-container">
          <img
            className="categories-logo"
            src={categoriesLogo}
            alt="categories"
          />
          <div className="selects">
            <Select
              className="currency-list"
              options={optionsCurrency}
              defaultValue={categories[0]}
              value={}
              onChange={() => setSelectedCurrenct(categories[1])}
            ></Select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
