import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
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

const razor = require("../../assets/razor.png");
const logo = require("../../assets/Logo.svg").default;
const categoriesLogo = require("../../assets/categories.svg").default;

interface OptionType {
  value: string;
  label: string;
}

interface HeaderProps {
  c: OptionType[];
}

const Header = () => {
  const categories = [
    { value: "all", label: "All categories" },
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
  ];

  const optionsCurrency = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "KZT", label: "KZT" },
  ];

  const optionsLanguage = [
    { value: "English", label: "English" },
    { value: "Russian", label: "Russian" },
    { value: "Kazakh", label: "Kazakh" },
  ];

  const navigate = useNavigate();
  const [selectedCurrency, setSelectedCurrency] = useState<OptionType | null>(
    optionsCurrency[0]
  );

  const [selectedLanguage, setSelectedLanguage] = useState<OptionType | null>(
    optionsLanguage[0]
  );

  const [isOpen, setOpen] = useState(false);

  function mainNavigate() {
    navigate("/");
  }

  function loginNavigate() {
    navigate("/login");
  }

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
          <img
            src={logo}
            alt="logotype"
            className="logo"
            onClick={mainNavigate}
          />
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
          <div className="lower-content">
            <img
              className="categories-logo"
              src={categoriesLogo}
              alt="categories"
            />
            <div className="selects">
              <Select
                className="currency-list"
                options={optionsCurrency}
                defaultValue={optionsCurrency[0]}
                value={selectedCurrency}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    background: "transparent",
                    outline: "none",
                    border: "none",
                    color: "white",
                    fontSize: "clamp(6px,1.5625vw,24px)",
                  }),
                  option: (provided) => ({
                    ...provided,
                    color: "black",
                  }),

                  singleValue: (provided) => ({
                    ...provided,
                    color: "white",
                  }),
                }}
                onChange={(selectedOption) =>
                  setSelectedCurrency(selectedOption as OptionType)
                }
              ></Select>
              <Select
                className="languages-list"
                options={optionsLanguage}
                defaultValue={optionsLanguage[0]}
                value={selectedLanguage}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    background: "transparent",
                    outline: "none",
                    border: "none",
                    color: "white",
                    fontSize: "clamp(6px,1.5625vw,24px)",
                  }),
                  option: (provided) => ({
                    ...provided,
                    color: "black",
                  }),

                  singleValue: (provided) => ({
                    ...provided,
                    color: "white",
                  }),
                }}
                onChange={(selectedOption) =>
                  setSelectedLanguage(selectedOption as OptionType)
                }
              ></Select>
            </div>
            <div className="buttons-container">
              <button className="sign-in-btn" onClick={loginNavigate}>
                <FontAwesomeIcon
                  className="user-icon"
                  icon={faUser}
                ></FontAwesomeIcon>
                Sign in
              </button>
              <button className="favourite-btn">
                <FontAwesomeIcon
                  className="heart-icon"
                  icon={faHeart}
                ></FontAwesomeIcon>
                Favorites
              </button>
              <Cart />
            </div>
          </div>
        </div>
        <div className="lower-navigation">
          <nav className="nav-links-container">
            <a href="/" className="link active">
              Woman
            </a>
            <a href="/" className="link">
              Male
            </a>
            <a href="/" className="link">
              Mother-Child
            </a>
            <a href="/" className="link">
              Home & Furniture
            </a>
            <a href="/" className="link">
              Super market
            </a>
            <a href="/" className="link">
              Cosmetics
            </a>
            <a href="/" className="link">
              Shoe & Bag
            </a>
            <a href="/" className="link">
              Electronic
            </a>
            <a href="/" className="link">
              Sport & Outdoor
            </a>
            <a href="/" className="link">
              Best seller
            </a>
          </nav>
        </div>
      </div>
      <div className="pc-header">
        <div className="upper-content">
          <div className="logo-search">
            <img className="logo" src={logo} alt="logo"></img>
            <SearchBar onSearch={handleSearch} categories={categories} />
          </div>
          <nav className="nav-links">
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
          </nav>
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
        </div>
        <div className="lower-container">
          {" "}
          <div className="lower-content">
            <img
              className="categories-logo"
              src={categoriesLogo}
              alt="categories"
            />
            <div className="selects">
              <Select
                className="currency-list"
                options={optionsCurrency}
                defaultValue={optionsCurrency[0]}
                value={selectedCurrency}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    background: "transparent",
                    outline: "none",
                    border: "none",
                    color: "white",
                    fontSize: "clamp(8px,0.83328vw,32px)",
                  }),
                  option: (provided) => ({
                    ...provided,
                    color: "black",
                  }),

                  singleValue: (provided) => ({
                    ...provided,
                    color: "white",
                  }),
                }}
                onChange={(selectedOption) =>
                  setSelectedCurrency(selectedOption as OptionType)
                }
              ></Select>
              <Select
                className="languages-list"
                options={optionsLanguage}
                defaultValue={optionsLanguage[0]}
                value={selectedLanguage}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    background: "transparent",
                    outline: "none",
                    border: "none",
                    color: "white",
                    fontSize: "clamp(8px,0.83328vw,32px)",
                  }),
                  option: (provided) => ({
                    ...provided,
                    color: "black",
                  }),

                  singleValue: (provided) => ({
                    ...provided,
                    color: "white",
                  }),
                }}
                onChange={(selectedOption) =>
                  setSelectedLanguage(selectedOption as OptionType)
                }
              ></Select>
            </div>
            <figure className="separator"></figure>
            <div className="advertisment">
              <img src={razor} alt="razor" className="razor" />
              <div className="text-container">
                <span className="text">
                  <strong>Weekly Men's Toiletries Coupons.</strong>
                </span>
                <span className="text-lower">
                  {" "}
                  We extend exclusive discounts to our male clientele
                </span>
              </div>
            </div>
            <figure className="separator"></figure>
            <div className="buttons-container">
              <button className="sign-in-btn" onClick={loginNavigate}>
                <FontAwesomeIcon
                  className="user-icon"
                  icon={faUser}
                ></FontAwesomeIcon>
                Sign in
              </button>
              <button className="favourite-btn">
                <FontAwesomeIcon
                  className="heart-icon"
                  icon={faHeart}
                ></FontAwesomeIcon>
                Favorites
              </button>
              <Cart />
            </div>
          </div>
        </div>
        <div className="lower-navigation">
          <nav className="nav-links-container">
            <a href="/" className="link active">
              Woman
            </a>
            <a href="/" className="link">
              Male
            </a>
            <a href="/" className="link">
              Mother-Child
            </a>
            <a href="/" className="link">
              Home & Furniture
            </a>
            <a href="/" className="link">
              Super market
            </a>
            <a href="/" className="link">
              Cosmetics
            </a>
            <a href="/" className="link">
              Shoe & Bag
            </a>
            <a href="/" className="link">
              Electronic
            </a>
            <a href="/" className="link">
              Sport & Outdoor
            </a>
            <a href="/" className="link">
              Best seller
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
