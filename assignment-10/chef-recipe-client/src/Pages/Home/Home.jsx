/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "../../Components/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";
import PopularChef from "../../Components/PopularChef/PopularChef";
import LatestRecipes from "../../Components/LatestRecipes/LatestRecipes";
import RandomChef from "../../Components/RandomChef/RandomChef";
import Tabs from "../../Components/Tabs/Tabs";

const Home = () => {
  const loadData = useLoaderData();

  return (
    <div>
      <Slider></Slider>
      <div style={{ display: "flex" }}>
        <div className="chef-card">
          {loadData.map((data, idx) => (
            <Card data={data} key={idx}></Card>
          ))}
        </div>
        <div
          style={{
            width: "30%",
            marginTop: "20px",
          }}
        >
          <PopularChef></PopularChef>
          <LatestRecipes></LatestRecipes>
          <RandomChef></RandomChef>
        </div>
      </div>
      <div style={{ marginLeft: "27px" }}>
        {" "}
        <Tabs></Tabs>
      </div>
    </div>
  );
};

export default Home;
