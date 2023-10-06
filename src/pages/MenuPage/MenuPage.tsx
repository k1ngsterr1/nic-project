import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Hamburger from "hamburger-react";

import "./styles/menu_page.css";

const MenuPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("Woman");
  const [isOpen, setOpen] = useState(true);

  const handleToggle = () => {
    if (isOpen) {
      window.history.back();
    } else {
      navigate("/");
    }
  };

  return (
    <menu className="menu">
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
      <div className="container">
        <div className="tab-heading-container">
          <div className="tab-heading">{tab}</div>
        </div>
        <main className="main-menu-content">
          <div className="menu-row">
            <section className="menu-section">
              <strong className="menu-section-heading">SHOE & BAG</strong>
              <nav className="links">
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
              </nav>
            </section>
            <section className="menu-section">
              <strong className="menu-section-heading">HOME TEXTILE</strong>
              <nav className="links">
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
              </nav>
            </section>
          </div>
          <div className="menu-row next">
            {" "}
            <section className="menu-section">
              <strong className="menu-section-heading">
                LUXURY &<br /> DESIGNER
              </strong>
              <nav className="links">
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
              </nav>
            </section>
            <section className="menu-section">
              <strong className="menu-section-heading">COSMETICS</strong>
              <nav className="links">
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
              </nav>
            </section>
          </div>
          <div className="menu-columns">
            <div className="column first">
              <section className="menu-section">
                <strong className="menu-section-heading">PARTY SUPPLIES</strong>
                <nav className="links">
                  <a href="/" className="link">
                    Event & Party
                  </a>
                  <a href="/" className="link">
                    Christmas
                  </a>
                  <a href="/" className="link">
                    Artificial Decorations
                  </a>
                  <a href="/" className="link">
                    Wedding
                  </a>
                </nav>
              </section>
              <section className="menu-section under">
                <strong className="menu-section-heading">
                  SPORT & <br /> OUTDOORS
                </strong>
                <nav className="links">
                  <a href="/" className="link">
                    Team Sports
                  </a>
                  <a href="/" className="link">
                    Water Sports
                  </a>
                  <a href="/" className="link">
                    Outdoor Recreation
                  </a>
                  <a href="/" className="link">
                    Fitness Equipment
                  </a>
                </nav>
              </section>
            </div>
            <div className="column second">
              {" "}
              <section className="menu-section">
                <strong className="menu-section-heading">CLOTHES</strong>
                <nav className="links">
                  <a href="/" className="link">
                    Bottoms
                  </a>
                  <a href="/" className="link">
                    Women's Clothing{" "}
                  </a>
                  <a href="/" className="link">
                    T-Shirts and Tops
                  </a>
                  <a href="/" className="link">
                    Dresses
                  </a>
                  <a href="/" className="link">
                    Outerwear
                  </a>
                  <a href="/" className="link">
                    Formal Wear
                  </a>
                  <a href="/" className="link">
                    Casual Wear
                  </a>
                  <a href="/" className="link">
                    Seasonal Collections
                  </a>
                  <a href="/" className="link">
                    Sports Bras
                  </a>
                  <a href="/" className="link">
                    Workout Tops
                  </a>
                  <a href="/" className="link">
                    Fall Wardrobe
                  </a>
                </nav>
              </section>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </menu>
  );
};

export default MenuPage;
