/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Recipe.css";

const Recipe = ({ nr }) => {
  const [dis, setDis] = useState(false);
  const [bgColor, setBgColor] = useState("none");

  const { banner, recipeName, likes, ingredients, ratting, cookingMethod } = nr;
  console.log(recipeName);

  const handleFavoriteBtn = () => {
    toast.success(`Welcome, ${recipeName}!`);
    setDis(true);
    setBgColor("#d39696");
  };

  return (
    <div
      style={{
        width: "480px",
        backgroundColor: "#E8ECF0",
        margin: "20px",
        borderRadius: "10px",
        color: "#000",
      }}
    >
      <img
        style={{
          width: "480px",
          height: "200px",
          padding: "10px",
          borderRadius: "10px",
        }}
        src={banner}
        alt="Chef Picture"
        className="chef-picture"
      />

      <div style={{ marginLeft: "10px", lineHeight: "27px" }}>
        <h2
          className="chef-name"
          style={{ fontSize: "30px", marginBottom: "10px" }}
        >
          <b>Name:</b> {recipeName}
        </h2>

        <p className="likes" style={{ fontSize: "20px" }}>
          <b>Likes:</b> {likes}
        </p>

        <p className="likes" style={{ fontSize: "20px" }}>
          <b>Ratings:</b> {ratting}
        </p>

        <span className="num-recipes" style={{ fontSize: "20px" }}>
          <b>Ingredients: </b>
          {ingredients.map((r, idx) => (
            <div key={idx}>
              <ul>
                <li> {r.name}</li>
              </ul>
            </div>
          ))}
        </span>

        <span className="num-recipes" style={{ fontSize: "20px" }}>
          <b>CookingMethod: </b>
          <ol>
            <li>
              {" "}
              <p>
                <b>1 </b> {cookingMethod[0]}
              </p>
            </li>
            <li>
              {" "}
              <p>
                <b>2 </b>
                {cookingMethod[2]}
              </p>
            </li>
            <li>
              {" "}
              <p>
                <b>3 </b>
                {cookingMethod[3]}
              </p>
            </li>
            <li>
              {" "}
              <p>
                <b>4 </b>
                {cookingMethod[3]}
              </p>
            </li>
            <li>
              {" "}
              <p>
                <b>5 </b>
                {cookingMethod[3]}
              </p>
            </li>
          </ol>
        </span>

        <button
          onClick={handleFavoriteBtn}
          disabled={dis}
          style={{
            border: "none",
            cursor: "pointer",
          }}
        >
          <svg
            className="svg-icon"
            viewBox="0 0 20 20"
            style={{
              fontSize: "20px",
              backgroundColor: bgColor,
              borderRadius: "10px",
            }}
          >
            <path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
          </svg>
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Recipe;
