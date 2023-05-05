/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google from "../../../../public/google.png";
import github from "../../../../public/github.png";

const Login = () => {
  const { loginUser, gitHubSignIn, GoogleSignIn } = useContext(AuthContext);

  const [showPass, setShowPass] = useState("password");
  const [error, setError] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    event.target.reset("");
    setError("");

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  const handleGitHubLogin = () => {
    gitHubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  const handleShowPass = () => {
    setShowPass(showPass === "password" ? "text" : "password");
  };

  return (
    <>
      <div className="loginContainer">
        <form onSubmit={handleLoginSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Email:
            </label>
            <input
              style={{ width: "100%", padding: "10px", fontSize: "16px" }}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="PositionLoginPagesOne">
            <label style={{ display: "block", marginBottom: "5px" }}>
              Password:
            </label>
            <input
              style={{ width: "100%", padding: "10px", fontSize: "16px" }}
              type={showPass}
              name="password"
              required
            />
            <span onClick={handleShowPass}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="showIcon"
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
          <p style={{ color: "red", margin: "10px 0" }}>{error}</p>
          <button
            style={{
              backgroundColor: "#A7A7A7",
              color: "000",
              fontWeight: "bolder",
              padding: "10px 20px",
              marginBottom: "10px",
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
            }}
            type="submit"
          >
            Login
          </button>
        </form>

        <div style={{ display: "flex" }}>
          {" "}
          <button onClick={handleGoogleSignIn} className="clickGoogleSignIn">
            <img
              src={google}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <p style={{ marginLeft: "5px" }}> Sign-in with Google</p>
          </button>
          <button onClick={handleGitHubLogin} className="clickGoogleSignIn">
            <img
              src={github}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <p style={{ marginLeft: "5px" }}> Sign-in with github</p>
          </button>
        </div>

        <div style={{ marginTop: "10px" }}>
          Don`t Have An Account?{" "}
          <Link
            to="/register"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Sign Up
          </Link>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default Login;
