import React from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import App from "./App";
import Login from "./Login/Login";


export const DefaultRoutes = [
    {"/home": () => <App />}, 
    { "/login": () => <Login />}
]
