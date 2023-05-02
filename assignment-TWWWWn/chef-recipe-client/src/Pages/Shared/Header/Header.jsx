/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            RS Recipes
          </Link>
          <div
            className={isMenuOpen ? "navbar-menu active" : "navbar-menu"}
            onClick={handleMenuClick}
          >
            <div className="navbar-menu-icon">
              <div className="navbar-menu-line"></div>
              <div className="navbar-menu-line"></div>
              <div className="navbar-menu-line"></div>
            </div>
          </div>
          <ul className={isMenuOpen ? "navbar-list active" : "navbar-list"}>
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/blog" className="navbar-link">
                Blog
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="" className="navbar-link">
                Recipes
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/register" className="navbar-link">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
