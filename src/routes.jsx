import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/shop", element: <Shop></Shop> },
      { path: "/cart", element: <Cart></Cart> },
    ],
  },
];

export default routes;
