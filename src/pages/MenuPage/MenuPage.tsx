import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Hamburger from "hamburger-react";

import "./styles/menu_page.css";

const MenuPage = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(true);

  const handleToggle = () => {
    if (isOpen) {
      window.history.back();
    } else {
      navigate("/");
    }
  };

  return (
    <div className="menu">
      <div className="menu-header-container">
        <header className="menu-header">
          <div className="burger">
            <Hamburger
              color="#023047"
              size={21}
              toggle={setOpen}
              toggled={isOpen}
              onToggle={handleToggle}
            />
          </div>
          <h2 className="menu-heading">Menu</h2>
        </header>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default MenuPage;
