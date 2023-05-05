/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import ActiveLink from "../../../Components/ActiveLink/ActiveLilnk";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <Link to="/">
              <h4>The Cooker</h4>
            </Link>
            <p style={{ fontSize: "20px" }}>
              As a chef, you have the power to turn ordinary ingredients into
              extraordinary dishes. Your creativity, passion, and attention to
              detail can transform a simple meal into a work of art.
            </p>
          </div>
          <div className="footer-column">
            <h4>Barger</h4>
            <div>
              <ul>
                <ActiveLink to="https://the-cooker-52354.web.app/chefs/1">
                  <li
                    style={{
                      display: "flex",
                      border: "1px solid gray",
                      padding: "5px",
                    }}
                  >
                    <img
                      src="https://i.postimg.cc/q7QLjcTq/recipe1.jpg"
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        border: "1px solid gray",
                      }}
                    />
                    <div style={{ margin: "10px" }}>
                      {" "}
                      <h5 style={{ fontSize: "16px" }}>Spicy Chicken Curry</h5>
                      <p>
                        Heat the olive oil in a large skillet over medium-high
                        heat...
                      </p>
                    </div>
                  </li>
                </ActiveLink>
                <ActiveLink to="https://the-cooker-52354.web.app/chefs/2">
                  <li
                    style={{
                      display: "flex",
                      border: "1px solid gray",
                      padding: "5px",
                    }}
                  >
                    <img
                      src="https://i.postimg.cc/MpSNLYhm/recipe10.jpg"
                      alt=""
                      style={{ width: "100px", border: "1px solid gray" }}
                    />
                    <div style={{ margin: "10px" }}>
                      {" "}
                      <h5 style={{ fontSize: "16px" }}>
                        Lemon Rosemary Grilled Chicken
                      </h5>
                      <p>
                        Remove the chicken from the skillet and set aside...
                      </p>
                    </div>
                  </li>
                </ActiveLink>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <h4>Cocktail</h4>
            <div>
              <ActiveLink to="https://the-cooker-52354.web.app/chefs/3">
                <li
                  style={{
                    display: "flex",
                    border: "1px solid gray",
                    padding: "5px",
                  }}
                >
                  <img
                    src="https://i.postimg.cc/13r21qSh/recipe11.jpg"
                    alt=""
                    style={{ width: "100px", border: "1px solid gray" }}
                  />
                  <div style={{ margin: "10px" }}>
                    {" "}
                    <h5 style={{ fontSize: "16px" }}>
                      Homemade Margherita Pizza
                    </h5>
                    <p>
                      Quis sed mid elit, risus aliquet placerat. Pid et, vel..
                    </p>
                  </div>
                </li>
              </ActiveLink>
              <ActiveLink to="https://the-cooker-52354.web.app/chefs/4">
                <li
                  style={{
                    display: "flex",
                    border: "1px solid gray",
                    padding: "5px",
                  }}
                >
                  <img
                    src="https://i.postimg.cc/8Ck3pzkF/recipe12.jpg"
                    alt=""
                    style={{ width: "100px", border: "1px solid gray" }}
                  />
                  <div style={{ margin: "10px" }}>
                    {" "}
                    <h5 style={{ fontSize: "16px" }}>Bacon Wrapped Dates</h5>
                    <p>
                      Add the onion, garlic, and ginger to the skillet and cook
                      ...
                    </p>
                  </div>
                </li>
              </ActiveLink>
            </div>
          </div>
          <div className="footer-column">
            <h4>Copy Milk</h4>
            <div>
              <ActiveLink to="https://the-cooker-52354.web.app/chefs/5">
                <li
                  style={{
                    display: "flex",
                    border: "1px solid gray",
                    padding: "5px",
                  }}
                >
                  <img
                    src="https://i.postimg.cc/wvvkPtqV/recipe2.jpg"
                    alt=""
                    style={{ width: "100px", border: "1px solid gray" }}
                  />
                  <div style={{ margin: "10px" }}>
                    {" "}
                    <h5 style={{ fontSize: "16px" }}>
                      Italian Sausage and Vegetable Skillet
                    </h5>
                    <p>
                      Add the onion, garlic, and ginger to the skillet and
                      cook..
                    </p>
                  </div>
                </li>
              </ActiveLink>
              <ActiveLink to="https://the-cooker-52354.web.app/chefs/6">
                <li
                  style={{
                    display: "flex",
                    border: "1px solid gray",
                    padding: "5px",
                  }}
                >
                  <img
                    src="https://i.postimg.cc/13r21qSh/recipe11.jpg"
                    alt=""
                    style={{ width: "100px", border: "1px solid gray" }}
                  />
                  <div style={{ margin: "10px" }}>
                    {" "}
                    <h5 style={{ fontSize: "16px" }}>
                      As a chef, you have the
                    </h5>
                    <p>
                      Quis sed mid elit, risus aliquet placerat. Pid et, vel..
                    </p>
                  </div>
                </li>
              </ActiveLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
