import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import Filters from "./pages/Filters/Filters";
// import Options from "./pages/Options/Options";
// import FeedPage from "./pages/FeedPage/FeedPage";
// import FeedItemDetail from "./pages/FeedtemDetail/FeedItemDetail";
// import { UserContext } from "./hooks/UserContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);
