/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Recipe from "./recipe/Recipe";

const Recipes = ({ loadData }) => {
  const recipe = loadData.recipes;

  return (
    <div className="chef-card">
      {recipe && recipe.map((nr, idx) => <Recipe key={idx} nr={nr}></Recipe>)}
    </div>
  );
};

export default Recipes;
