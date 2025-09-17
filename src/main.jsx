import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import Cart from "./pages/Cart.jsx";
import Shop from "./pages/Shop.jsx";
import "./index.css";
import routes from "./routes.jsx";
import App from "./App.jsx";

const router = createBrowserRouter(routes);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
    {/* <Cart></Cart> */}
    {/* <Shop></Shop> */}
  </StrictMode>,
);
