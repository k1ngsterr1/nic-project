import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import app from "./api/firebase/firebase";

import "swiper/css";
import "./styles/global/global.css";
import { CartProvider } from "./contexts/CartContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
