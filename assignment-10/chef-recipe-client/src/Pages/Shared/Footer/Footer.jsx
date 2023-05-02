/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <h4>Recipes</h4>
            <p style={{ fontSize: "20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              aspernatur quo harum dolores corrupti saepe deserunt iusto aliquid
              ea nesciunt quibusdam obcaecati architecto inventore atque fuga,
              odit, molestias iure. Eos.
            </p>
          </div>
          <div className="footer-column">
            <h4>Ingredients</h4>
            <ul>
              <li>
                <Link to="">Vegetables</Link>
              </li>
              <li>
                <Link to="">Fruits</Link>
              </li>
              <li>
                <Link to="">Meat</Link>
              </li>
              <li>
                <Link to="">Dairy</Link>
              </li>
              <li>
                <Link to="">Grains</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Popular</h4>
            <ul>
              <li>
                <Link to="">Chocolate Chip Cookies</Link>
              </li>
              <li>
                <Link to="">Pesto Pasta</Link>
              </li>
              <li>
                <Link to="">Chicken Parmesan</Link>
              </li>
              <li>
                <Link to="">Taco Salad</Link>
              </li>
              <li>
                <Link to="">Spaghetti and Meatballs</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li>
                <Link to="">Contact Us</Link>
              </li>
              <li>
                <Link to="">Privacy Policy</Link>
              </li>
              <li>
                <Link to="">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="">Site Map</Link>
              </li>
              <li>
                <Link to="">Newsletter Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
