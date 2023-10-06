import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "hamburger-react";

import "./styles/header.css";
import Cart from "./Cart/Cart";
import SearchBar from "./SearchBar/SearchBar";
import Burger from "./Burger/Burger";
import Menu from "../Menu/Menu";

const logo = require("../../assets/Logo.svg").default;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

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
        {/* <Hamburger
          color="#023047"
          size={21}
          toggle={setOpen}
          toggled={isOpen}
        ></Hamburger> */}
        <Burger
          burgerClass={isOpen ? "absolute-burger" : "burger"}
          setOpen={setOpen}
          isOpened={isOpen}
        />
        <img className="logo" src={logo} alt="logo"></img>
        <Cart></Cart>
      </div>
      <div className="lower-content">
        <SearchBar onSearch={handleSearch} categories={categories} />
      </div>
      {isOpen && <Menu />}
    </header>
  );
};

export default Header;
