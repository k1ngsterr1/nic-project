import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

interface OptionType {
  value: string;
  label: string;
}

const paypal = require("../../assets/paypal.jpg");
const visa = require("../../assets/visa.jpg");
const mastercard = require("../../assets/mastercard.jpg");

const paypal_pc = require("../../assets/paypal_pc.jpg");
const visa_pc = require("../../assets/visa_pc.jpg");
const mastercard_pc = require("../../assets/mastercard_pc.jpg");

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row one">
          <div className="nav-link">
            <strong className="footer-heading">Company</strong>
            <nav className="links">
              <Link to="/about" className="link">
                About Us
              </Link>
              <Link to="/store" className="link">
                Our Store
              </Link>
              <Link to="/contact" className="link">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="nav-link">
            <strong className="footer-heading">
              Career
              <br />
              Oppurtunities
            </strong>
            <nav className="links">
              <Link to="/selling-programms" className="link">
                Selling Programs
              </Link>
              <Link to="/advertise" className="link">
                Advertise
              </Link>
              <Link to="/cooperation" className="link">
                Cooperation
              </Link>
            </nav>
          </div>
        </div>
        <div className="row two">
          {" "}
          <div className="nav-link">
            <strong className="footer-heading">How to Buy</strong>
            <nav className="links">
              <Link to="/payments" className="link">
                Making Payments
              </Link>
              <Link to="/delivery" className="link">
                Delivery Options
              </Link>
              <Link to="/buyer-protection" className="link">
                Buyer Protection
              </Link>
              <Link to="/user-guide" className="link">
                New User Guide
              </Link>
            </nav>
          </div>
          <div className="nav-link help">
            <strong className="footer-heading">Help</strong>
            <nav className="links">
              <Link to="/contact-us" className="link">
                Contacts Us
              </Link>
              <Link to="/faq" className="link">
                FAQ
              </Link>
              <Link to="/privacy" className="link">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer-container-pc">
        <div className="columns">
          <div className="column">
            <span className="column-heading">Company</span>
            <a href="/" className="link">
              About Us
            </a>
            <a href="/" className="link">
              Our Store
            </a>
            <a href="/" className="link">
              Contact us
            </a>
          </div>
          <div className="column">
            <span className="column-heading">Career Opportunities</span>
            <a href="/" className="link">
              Selling Programs
            </a>
            <a href="/" className="link">
              Advertise
            </a>
            <a href="/" className="link">
              Cooperation
            </a>
          </div>
          <div className="column">
            <span className="column-heading">How to Buy</span>
            <a href="/" className="link">
              Making Payments
            </a>
            <a href="/" className="link">
              Delivery Options
            </a>
            <a href="/" className="link">
              Buyer Protection
            </a>
            <a href="/" className="link">
              New User Guide
            </a>
          </div>
          <div className="column">
            <span className="column-heading">Help</span>
            <a href="/" className="link">
              Contacts Us
            </a>
            <a href="/" className="link">
              FAQ
            </a>
            <a href="/" className="link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div className="logotypes">
        <div className="content-container">
          <img src={visa} alt="visa" />
          <img src={mastercard} alt="mastercard" />
          <img src={paypal} alt="paypal" />
        </div>
      </div>
      <div className="logotypes-pc">
        <div className="logo-language">
          <div className="logos">
            <img src={visa_pc} alt="logo" className="logo" />
            <img src={mastercard_pc} alt="logo" className="logo" />
            <img src={paypal_pc} alt="logo" className="logo" />
          </div>
          <div className="language">
            <span className="text">English</span>
            <FontAwesomeIcon className="chevron" icon={faChevronDown} />
          </div>
        </div>
        <figure className="separator"></figure>
        <div className="lower-container">
          <span className="text">
            165-179 Forster Road City of Monash, Melbourne, Australia
          </span>
          <div className="media">
            <FontAwesomeIcon
              className="social"
              icon={faInstagram}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="social"
              icon={faFacebook}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="social"
              icon={faTelegram}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
