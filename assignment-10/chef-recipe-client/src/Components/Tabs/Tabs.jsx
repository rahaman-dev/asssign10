/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PopularChef from "../PopularChef/PopularChef";
import LatestRecipes from "../LatestRecipes/LatestRecipes";
import RandomChef from "../RandomChef/RandomChef";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("popular");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const popularContent = (
    <div>
      <PopularChef></PopularChef>
    </div>
  );

  const recentContent = (
    <div>
      <LatestRecipes></LatestRecipes>
    </div>
  );

  const randomContent = (
    <div>
      <RandomChef></RandomChef>
    </div>
  );

  return (
    <div>
      <nav>
        <button
          style={{ fontSize: "20px", padding: "10px" }}
          onClick={() => handleTabClick("popular")}
          className={activeTab === "popular" ? "active" : ""}
        >
          Popular Chef
        </button>
        <button
          style={{ fontSize: "20px", padding: "10px" }}
          onClick={() => handleTabClick("recent")}
          className={activeTab === "recent" ? "active" : ""}
        >
          Latest Chef
        </button>
        <button
          style={{ fontSize: "20px", padding: "10px" }}
          onClick={() => handleTabClick("random")}
          className={activeTab === "random" ? "active" : ""}
        >
          Random Chef
        </button>
      </nav>
      <div>
        {activeTab === "popular" && popularContent}
        {activeTab === "recent" && recentContent}
        {activeTab === "random" && randomContent}
      </div>
    </div>
  );
};

export default Tabs;
