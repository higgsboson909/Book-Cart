import Navbar from "../components/Navbar";
import BookGrid from "../components/BookGrid";
import { useState } from "react";
const Cart = () => {
  const [cartItems, setCartItems] = useState(0);
  return (
    <div className="w-full ">
      <Navbar></Navbar>
      <BookGrid></BookGrid>
    </div>
  );
};

export default Cart;
