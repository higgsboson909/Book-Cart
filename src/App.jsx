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
      <Outlet context={{ cartItems, setCartItems, data, loading }}></Outlet>
    </div>
  );
}

export default App;
