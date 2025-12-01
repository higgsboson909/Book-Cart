import { Outlet } from "react-router";
import "./App.css";
import { useEffect } from "react";
import { getData } from "./utils/getData";
import Navbar from "./components/Navbar";
import NavbarNew from "./components/NavbarNew.jsx"
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [cart, setCart] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
  });
  const [isCartSideBarOpen, setIsCartSideBarOpen] = useState(false);

  const stuff = () => {
    let q = 0;
    for (let key in quantities) {
      if (quantities[key] > 0) q++;
    }
    return q;
  };
  useEffect(() => {
    getData().then((books) => {
      setData(books);
      console.log(books);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full ">
      <NavbarNew></NavbarNew>
      <Navbar
        cartItems={stuff}
        toggleCartSideBar={setIsCartSideBarOpen}
      ></Navbar>
      <Outlet
        context={{
          cartItems,
          setCartItems,
          data,
          loading,
          quantities,
          setQuantities,
          isCartSideBarOpen,
          setIsCartSideBarOpen,
        }}
      ></Outlet>
    </div>
  );
}

export default App;
