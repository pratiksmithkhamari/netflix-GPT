import React from "react";
import Login from "../Loginpage/Login";
import Browse from "./Browse/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return <div>
    <RouterProvider router={router} />
  </div>;
};

export default Body;
