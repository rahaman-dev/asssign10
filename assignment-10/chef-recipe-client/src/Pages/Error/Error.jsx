/* eslint-disable no-unused-vars */
import React from "react";
import error from "../../../public/images-removebg-preview.png";

const Error = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "gray",
      }}
    >
      <div>
        <img src={error} alt="" />
      </div>
      <div>
        <h2 style={{ fontSize: "150px", color: "#fff", fontWeight: "800" }}>
          404
        </h2>
        <h2 style={{ color: "#fff" }}>No route matches URL</h2>
      </div>
    </div>
  );
};

export default Error;
