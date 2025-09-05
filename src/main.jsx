import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cart from "./pages/Cart.jsx";
import Shop from "./pages/Shop.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Cart></Cart> */}
    <Shop></Shop>
  </StrictMode>,
);
