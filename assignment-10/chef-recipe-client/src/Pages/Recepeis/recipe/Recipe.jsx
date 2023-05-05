/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Recipe.css";

const Recipe = ({ nr }) => {
  const [dis, setDis] = useState(false);
  const [bgColor, setBgColor] = useState("none");

  const { banner, recipeName, ingredients, ratting, cookingMethod } = nr;

  const handleFavoriteBtn = () => {
    toast.success(`Welcome, ${recipeName}! is my favorite `);
    setDis(true);
    setBgColor("#d39696");
  };

  return (
    <div className="chef-recipe-four-card">
      <img src={banner} alt="Chef Picture" className="chef-recipe-banner" />

      <div style={{ marginLeft: "10px", lineHeight: "27px" }}>
        <h2
          className="chef-name"
          style={{ fontSize: "30px", marginBottom: "10px", height: "50px" }}
        >
          <b>Recipe Name:</b> {recipeName}
        </h2>

        <span className="num-recipes" style={{ fontSize: "20px" }}>
          <b>Ingredients: </b>
          {ingredients &&
            ingredients.map((r, idx) => (
              <div key={idx}>
                <ul>
                  <li>
                    {idx + 1} {r.name}
                  </li>
                </ul>
              </div>
            ))}
        </span>

        <span className="num-recipes" style={{ fontSize: "20px" }}>
          <b>CookingMethod: </b>
          <ol>
            <li>
              <p>
                <b>1 </b> {cookingMethod[0]}
              </p>
            </li>
            <li>
              <p>
                <b>2 </b>
                {cookingMethod[2]}
              </p>
            </li>
            <li>
              <p>
                <b>3 </b>
                {cookingMethod[3]}
              </p>
            </li>
            <li>
              <p>
                <b>4 </b>
                {cookingMethod[3]}
              </p>
            </li>
            <li>
              <p>
                <b>5 </b>
                {cookingMethod[3]}
              </p>
            </li>
          </ol>
        </span>

        <p className="likes" style={{ fontSize: "20px" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#DCAB12"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="none"
              style={{ width: "25px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <b></b> {ratting}
          </span>
        </p>

        <button
          onClick={handleFavoriteBtn}
          disabled={dis}
          style={{
            width: "150px",
            fontSize: "20px",
            marginTop: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            padding: "8px",
            textDecoration: "none",
          }}
        >
          Favorite
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Recipe;
