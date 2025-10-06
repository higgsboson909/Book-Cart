import { Outlet } from "react-router";
import "./App.css";
import { useEffect } from "react";
import { getData } from "./utils/getData";
import Navbar from "./components/Navbar";
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

  useEffect(() => {
    getData().then((books) => {
      setData(books);
      console.log(books);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full ">
      <Navbar cartItems={cartItems}></Navbar>
      <Outlet
        context={{
          cartItems,
          setCartItems,
          data,
          loading,
          quantities,
          setQuantities,
        }}
      ></Outlet>
    </div>
  );
}

export default App;
