import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";

const routes = [
  {
    path: "/",
    element: <Home></Home>,
  },
  { path: "shop", element: <Shop></Shop> },
  { path: "cart", element: <Cart></Cart> },
];

export default routes;
