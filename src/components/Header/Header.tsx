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

import "./styles/header.css";
import Select from "react-select";

const logo = require("../../assets/Logo.svg").default;
const categoriesLogo = require("../../assets/categories.svg").default;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Header = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setOpen] = useState(false);

  function mainNavigate() {
    navigate("/");
  }

  const categories = [
    { value: "USD", label: "USD" },
    { value: "KZT", label: "KZT" },
    { value: "EUR", label: "EUR" },
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
            <Select className="currency-list" options={categories}></Select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
