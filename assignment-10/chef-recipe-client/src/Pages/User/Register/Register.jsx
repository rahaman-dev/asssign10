/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { updateProfile } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { user, createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const [accepted, setAccepted] = useState();
  const [showPass, setShowPass] = useState("password");

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const photo = event.target.photo.value;
    const fullName = firstName + lastName;

    event.target.reset("");
    setError("");

    if (password !== confirmPassword) {
      setError("Invalid Confirm Password");
      return;
    }
    if (password.length < 6) {
      setError("password will be  minimum 6 character");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("password have must be one uppercase");
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      setError("password have must be a digit");
      return;
    } else if (!/(?=.*[^\da-zA-Z])/.test(password)) {
      setError("password  have must be a special character");
      return;
    }

    createUser(email, password).then((result) => {
      const currentUser = result.user;
      updateProfile(currentUser, {
        displayName: fullName,
        photoURL: photo,
      })
        .then(() => {
          toast.success("your account is crated successfully!");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          setError(error.message);
          console.log(error.message);
        });
    });
  };

  const handleShowPass = () => {
    setShowPass(showPass === "password" ? "text" : "password");
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  return (
    <div className="registerFormContainer">
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            First Name<b style={{ color: "red" }}>*</b>
          </label>
          <input
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Last Name<b style={{ color: "red" }}>*</b>
          </label>
          <input
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Photo<b style={{ color: "red" }}>*</b>
          </label>
          <input
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            type="text"
            name="photo"
            placeholder="Your Photo URL"
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Email<b style={{ color: "red" }}>*</b>
          </label>
          <input
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div style={{ marginBottom: "20px", position: "relative" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Password<b style={{ color: "red" }}>*</b>
          </label>
          <input
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            type={showPass}
            name="password"
            placeholder="Password"
            required
          />

          <span onClick={handleShowPass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{
                width: "25px",
                position: "absolute",
                left: "460px",
                bottom: "5px",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Confirm Password<b style={{ color: "red" }}>*</b>
          </label>
          <input
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div>
          <label>
            <input type="checkbox" onClick={handleAccepted} /> Accept
            <Link to="/termsAndCondition">Our Terms And Condition</Link>
          </label>
        </div>
        <p style={{ color: "red", margin: "10px 0" }}>{error}</p>
        <button
          style={{
            backgroundColor: "#A7A7A7",
            color: "000",
            fontWeight: "bolder",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
          }}
          type="submit"
          disabled={!accepted}
        >
          Sign Up
        </button>
      </form>

      <div style={{ marginTop: "10px" }}>
        Already Have An Account?{" "}
        <Link
          to="/login"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Login
        </Link>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
