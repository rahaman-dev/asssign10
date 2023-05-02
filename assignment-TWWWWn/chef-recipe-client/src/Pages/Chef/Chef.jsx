/* eslint-disable no-unused-vars */
import React from "react";
import "./Chef.css";
import { Link, useLoaderData } from "react-router-dom";
import Recipes from "../Recepeis/Recipes";

const Chef = () => {
  const loadData = useLoaderData();
  const {
    _id,
    numbersOfRecipes,
    chefPicture,
    chefName,
    yearsOfExperience,
    bio,
    address,
    description,
    likes,
    chefBanner,
  } = loadData;

  return (
    <div
      style={{
        margin: "20px",
        borderRadius: "10px",

        color: "#000",
      }}
    >
      <img
        style={{
          width: "1200px",
          padding: "10px",
          borderRadius: "10px",
          height: "400px",
        }}
        src={chefPicture}
        alt="Chef Picture"
        className="chef-picture"
      />
      <div style={{ marginLeft: "10px", lineHeight: "27px" }}>
        <h2
          className="chef-name"
          style={{ fontSize: "30px", marginBottom: "10px" }}
        >
          Name: {chefName}
        </h2>
        <p className="years-of-experience" style={{ fontSize: "20px" }}>
          <b>BIO</b> {bio}
        </p>
        <p className="num-recipes" style={{ fontSize: "20px" }}>
          <b>Description</b> {description}
        </p>
        <p className="likes" style={{ fontSize: "20px" }}>
          <b> Likes: </b>
          {likes}
        </p>
        <p className="likes" style={{ fontSize: "20px" }}>
          <b> Numbers Of Recipes: </b>
          {numbersOfRecipes}
        </p>
        <p className="likes" style={{ fontSize: "20px" }}>
          <b> Year Of Experience: </b>
          {yearsOfExperience}
        </p>
      </div>
      <Recipes loadData={loadData}></Recipes>
    </div>
  );
};

export default Chef;
