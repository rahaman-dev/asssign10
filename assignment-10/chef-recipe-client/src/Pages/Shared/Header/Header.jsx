/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ActiveLilnk from "../../../Components/ActiveLink/ActiveLilnk";

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
            The Cooker
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
              <ActiveLilnk to="/" className="navbar-link">
                Home
              </ActiveLilnk>
            </li>
            <li className="navbar-item">
              <ActiveLilnk to="/blog" className="navbar-link">
                Blog
              </ActiveLilnk>
            </li>

            <li className="navbar-item">
              <ActiveLilnk to="/recipes" className="navbar-link">
                Profile
              </ActiveLilnk>
            </li>

            <li className="navbar-item">
              <ActiveLilnk to="/login" className="navbar-link">
                Login
              </ActiveLilnk>
            </li>

            <li className="navbar-item">
              <ActiveLilnk to="/register" className="navbar-link">
                Sign Up
              </ActiveLilnk>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
