/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Spiner from "../Components/Spiner/Spiner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return <Spiner></Spiner>;
  }

  return (
    <>
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
    </>
  );
};

export default PrivateRoutes;
