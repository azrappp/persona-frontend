import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./pages/LandingPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LandingPage></LandingPage>
    {/* <TeamPage/> */}
  </React.StrictMode>
);
