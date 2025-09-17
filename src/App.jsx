import "./App.css";
import BookGrid from "./components/BookGrid";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <div className="w-full ">
      {/* <Navbar></Navbar> */}

      {/* <Hero></Hero> */}
      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
