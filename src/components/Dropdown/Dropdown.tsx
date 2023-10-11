import React from "react";

import "./styles/dropdown.css";

interface DropdownProps {
  setVisible?: any;
}

const pc_menu = require("../../assets/menu_pc.jpg");

const Dropdown: React.FC<DropdownProps> = (props) => {
  return (
    <div className="dropdown">
      <div className="dropdown-container">
        <div className="column">
          <div className="tab">
            <span className="tab-heading">
              <strong>Shoe & Bag</strong>
            </span>
            <a href="/" className="link">
              Casual Shoes
            </a>
            <a href="/" className="link">
              Boots
            </a>
            <a href="/" className="link">
              Sandals
            </a>
            <a href="/" className="link">
              Slippers
            </a>
          </div>
          <div className="tab">
            <span className="tab-heading">
              <strong>Luxury & designer</strong>
            </span>
            <a href="/" className="link">
              Towels
            </a>
            <a href="/" className="link">
              Bathroom Scales
            </a>
            <a href="/" className="link">
              Bath Mats
            </a>
            <a href="/" className="link">
              Shower Caps
            </a>
          </div>
        </div>
        <div className="column">
          <div className="tab">
            <span className="tab-heading">
              <strong>Home Textile</strong>
            </span>
            <a href="/" className="link">
              Bedding
            </a>
            <a href="/" className="link">
              Pillows
            </a>
            <a href="/" className="link">
              Handkerchief Towels
            </a>
            <a href="/" className="link">
              Curtain
            </a>
          </div>
          <div className="tab">
            <span className="tab-heading">
              <strong>Cosmetics</strong>
            </span>
            <a href="/" className="link">
              Shampoo and Conditioner
            </a>
            <a href="/" className="link">
              Styling Products
            </a>
            <a href="/" className="link">
              Hair Accessories
            </a>
            <a href="/" className="link">
              Men's Grooming
            </a>
          </div>
        </div>
        <div className="column">
          <div className="tab">
            <span className="tab-heading">
              <strong>Clothes</strong>
            </span>
            <a href="/" className="link">
              Bottoms
            </a>
            <a href="/" className="link">
              Women's Clothing
            </a>
            <a href="/" className="link">
              T-Shirts and Tops
            </a>
            <a href="/" className="link">
              Dresses
            </a>
            <a href="/." className="link">
              Outerwear
            </a>
            <a href="/." className="link">
              Formal Wear
            </a>
            <a href="/." className="link">
              Casual Wear
            </a>
            <a href="/." className="link">
              Seasonal Collections
            </a>
            <a href="/." className="link">
              Sports Bras
            </a>
            <a href="/." className="link">
              Workout Tops
            </a>
            <a href="/." className="link">
              Fall Wardrobe
            </a>
          </div>
        </div>
      </div>
      <div className="dropdown-pc">
        {" "}
        <div className="column">
          <div className="tab">
            <span className="tab-heading">
              <strong>Shoe & Bag</strong>
            </span>
            <a href="/" className="link">
              Casual Shoes
            </a>
            <a href="/" className="link">
              Boots
            </a>
            <a href="/" className="link">
              Sandals
            </a>
            <a href="/" className="link">
              Slippers
            </a>
          </div>
          <div className="tab">
            <span className="tab-heading">
              <strong>Luxury & designer</strong>
            </span>
            <a href="/" className="link">
              Towels
            </a>
            <a href="/" className="link">
              Bathroom Scales
            </a>
            <a href="/" className="link">
              Bath Mats
            </a>
            <a href="/" className="link">
              Shower Caps
            </a>
          </div>
        </div>
        <div className="column">
          <div className="tab">
            <span className="tab-heading">
              <strong>Home Textile</strong>
            </span>
            <a href="/" className="link">
              Bedding
            </a>
            <a href="/" className="link">
              Pillows
            </a>
            <a href="/" className="link">
              Handkerchief Towels
            </a>
            <a href="/" className="link">
              Curtain
            </a>
          </div>
          <div className="tab">
            <span className="tab-heading">
              <strong>Cosmetics</strong>
            </span>
            <a href="/" className="link">
              Shampoo and Conditioner
            </a>
            <a href="/" className="link">
              Styling Products
            </a>
            <a href="/" className="link">
              Hair Accessories
            </a>
            <a href="/" className="link">
              Men's Grooming
            </a>
          </div>
        </div>
        <div className="column">
          <div className="tab">
            <span className="tab-heading">
              <strong>Clothes</strong>
            </span>
            <a href="/" className="link">
              Bottoms
            </a>
            <a href="/" className="link">
              Women's Clothing
            </a>
            <a href="/" className="link">
              T-Shirts and Tops
            </a>
            <a href="/" className="link">
              Dresses
            </a>
            <a href="/." className="link">
              Outerwear
            </a>
            <a href="/." className="link">
              Formal Wear
            </a>
            <a href="/." className="link">
              Casual Wear
            </a>
            <a href="/." className="link">
              Seasonal Collections
            </a>
            <a href="/." className="link">
              Sports Bras
            </a>
            <a href="/." className="link">
              Workout Tops
            </a>
            <a href="/." className="link">
              Fall Wardrobe
            </a>
          </div>
        </div>
        <img src={pc_menu} alt="pc-menu" className="pc-menu-img" />
      </div>
    </div>
  );
};

export default Dropdown;
