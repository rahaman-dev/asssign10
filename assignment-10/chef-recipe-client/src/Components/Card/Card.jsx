/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Card = ({ data }) => {
  const {
    chef_id,
    numbersOfRecipes,
    chefPicture,
    chefName,
    yearsOfExperience,
    chefLikes,
    city,
  } = data;
  return (
    <div className="cardRRR">
      <LazyLoad
        height={280}
        width={240}
        threshold={0.95}
        onContentVisible={() => {}}
      >
        <img className="chef-picture" src={chefPicture} alt="Chef Picture" />
      </LazyLoad>
      <div style={{ marginLeft: "10px", lineHeight: "27px" }}>
        <h2
          className="chef-name"
          style={{ fontSize: "30px", marginBottom: "10px", height: "50px" }}
        >
          Name: {chefName}
        </h2>
        <p className="years-of-experience" style={{ fontSize: "20px" }}>
          Experience {yearsOfExperience}
        </p>
        <p className="num-recipes" style={{ fontSize: "20px" }}>
          Number of recipe {numbersOfRecipes}
        </p>

        <p className="likes" style={{ fontSize: "20px" }}>
          <span className="likes" style={{ fontSize: "20px" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: "25px", color: "red" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <b></b> {city}
            </span>
          </span>
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <button
            className="view-recipes-button"
            style={{
              fontSize: "20px",
              marginRight: "20px",
              border: "none",
              borderRadius: "10px",
              padding: "15px",

              backgroundColor: "#F9D72F",
            }}
          >
            <Link
              to={`chefs/${chef_id}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              View Recipes
            </Link>
          </button>

          <p className="likes" style={{ fontSize: "20px" }}>
            <span
              className="likes"
              style={{ fontSize: "20px", display: "block" }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{ width: "25px", color: "red" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <b></b> {chefLikes}
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
