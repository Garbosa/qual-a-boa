import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Filters from "./pages/Filters/Filters";
import Options from "./pages/Options/Options";
import FeedPage from "./pages/FeedPage/FeedPage";
import FeedItemDetail from "./pages/FeedtemDetail/FeedItemDetail";
import { UserContext } from "./hooks/UserContext";

function App() {
  const [value, setValue] = useState("");
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ value, setValue }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/options" element={<Options />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/detail" element={<FeedItemDetail />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
