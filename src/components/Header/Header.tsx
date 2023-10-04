import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "hamburger-react";

import "./styles/header.css";
import Cart from "./Cart/Cart";

const logo = require("../../assets/Logo.svg").default;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="upper-content">
        <Hamburger
          color="#023047"
          size={21}
          toggle={setOpen}
          toggled={isOpen}
        ></Hamburger>
        <img className="logo" src={logo} alt="logo"></img>
        <Cart></Cart>
      </div>
    </header>
  );
};

export default Header;
