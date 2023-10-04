import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

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
          <div className="nav-link">
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
    </footer>
  );
};

export default Footer;
