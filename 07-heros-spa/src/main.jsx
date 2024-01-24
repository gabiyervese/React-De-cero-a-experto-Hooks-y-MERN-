import React from "react";
import ReactDOM from "react-dom/client";
import HerosApp from "./HerosApp.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <HerosApp />
    </React.StrictMode>
  </BrowserRouter>
);
