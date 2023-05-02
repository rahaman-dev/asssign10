/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "../../Components/Slider/Slider";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";

const Home = () => {
  const loadData = useLoaderData();
  // const resin = loadData.recipes;
  return (
    <div>
      {/* {resin.map((n, idx) => (
        <>
          <ul>
            <li>
              <Link to={`recipe/${n.recipes_id}`}>Visual Recipe</Link>
            </li>
          </ul>
        </>
      ))} */}
      {/* <h2>{loadData.recipes}</h2> */}

      <Slider></Slider>

      <div className="chef-card">
        {loadData.map((data, idx) => (
          <Card data={data} key={idx}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
