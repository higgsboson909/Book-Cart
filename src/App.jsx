import "./App.css";
import Hero from "./components/Hero";
import BookGrid from "./components/BookGrid";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(0);
  return (
    <div className="w-full ">
      <Navbar></Navbar>

      {/* <Hero></Hero> */}
      <BookGrid></BookGrid>
    </div>
  );
}

export default App;
