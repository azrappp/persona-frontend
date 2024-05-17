import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./pages/LandingPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/team/:id",
    element: <TeamPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
