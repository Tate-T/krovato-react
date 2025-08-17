import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./components/context/Products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <BrowserRouter basename="/krovato-react">
        <App />
      </BrowserRouter>
    </ProductsProvider>
  </React.StrictMode>
);
