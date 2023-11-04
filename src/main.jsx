import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { productApiSlice } from "./services/productApiSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={productApiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
