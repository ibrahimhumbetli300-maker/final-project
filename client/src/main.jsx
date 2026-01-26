import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { BasketProvider } from "./context/BasketContext";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BasketProvider>
);