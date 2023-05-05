/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import { AuthContext } from "../../../Provider/AuthProvider";
import ActiveLink from "../../../Components/ActiveLink/ActiveLilnk";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { user, logOut } = useContext(AuthContext);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setHover("");
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [containerRef]);

  // const handleMenuClick = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then(() => {});
  };

  return (
    <>
      <nav className="menu">
        <div className="menu__logo">
          <Link to="/" className="navbar-logo">
            The Cooker
          </Link>
        </div>
        <button className="menu__toggle" onClick={toggleMenu}>
          {isOpen ? "X " : "menu"}
        </button>
        <ul className={`menu__list ${isOpen ? "menu__list--open" : ""}`}>
          <li className="menu__item">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li className="menu__item">
            <ActiveLink to="blog">Blog</ActiveLink>
          </li>

          {user ? (
            <>
              <li className="navbar-item positionTwo">
                <img
                  src={user?.photoURL}
                  alt=""
                  onMouseOver={() => setHover(user?.displayName)}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50px",
                    cursor: "pointer",
                  }}
                />
                {hover && (
                  <div ref={containerRef} className="navbar-item positionONe">
                    <h2 style={{ marginBottom: "20px" }}>
                      <b>Your Name:</b> <small>{hover}</small>
                    </h2>
                    <span
                      onClick={handleLogOut}
                      className="navbar-item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        to="/login"
                        className="navbar-item"
                        style={{
                          padding: "10px",
                          borderRadius: "10px",
                          fontSize: "20px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          style={{ width: "20px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                          />
                        </svg>
                        Log Out
                      </button>
                    </span>
                  </div>
                )}
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <ActiveLink to="/login" className="navbar-link">
                  Login
                </ActiveLink>
              </li>
              <li className="navbar-item">
                <ActiveLink to="/register" className="navbar-link">
                  Sign Up
                </ActiveLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
