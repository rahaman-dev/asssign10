/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LatestRecipes = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-server-blue.vercel.app/ranking/2")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);

  return (
    <div>
      <h2 style={{ color: "#020617" }}>Latest Chef`s</h2>
      {popular &&
        popular.map((data, idx) => (
          <div
            key={idx}
            style={{
              margin: "10px",
              display: "flex",
              height: "170px",
              backgroundColor: "#94a3b8",
              padding: "10px",
            }}
          >
            <div>
              <img
                src={data.chefPicture}
                alt=""
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <div style={{ margin: "0 10px" }}>
              <h2>{data.chefName}</h2>
              <p
                style={{
                  display: "flex",
                  alignContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#007AFF"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{ width: "20px", color: "#007AFF" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
                {data.chefLikes}
              </p>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <span
                  style={{
                    display: "flex",
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
                  <b></b>
                </span>
                {data.recipes[0].ratting}
              </p>
              <Link
                to={`chefs/${data.chef_id}`}
                style={{
                  fontSize: "16px",
                  padding: "10px",
                  backgroundColor: "#F9D72F",
                  borderRadius: "5px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                Details{" "}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LatestRecipes;
