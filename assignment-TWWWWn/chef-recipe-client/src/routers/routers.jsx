/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../utilities/Main";
import Login from "../Pages/User/Login/Login";
import Register from "../Pages/User/Register/Register";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import Chef from "../Pages/Chef/Chef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://chef-recipe-server-blue.vercel.app/chefs"),
      },
      {
        path: "/chefs/:id",
        element: <Chef></Chef>,
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-server-blue.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
