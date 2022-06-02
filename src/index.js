import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Filters from "./pages/Filters/Filters";
import Options from "./pages/Options/Options";
import FeedPage from "./pages/MapPage/FeedPage";
import FeedItemDetail from "./pages/FeedtemDetail/FeedItemDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/filters" element={<Filters />} />
        <Route path="/options" element={<Options />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/detail" element={<FeedItemDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
