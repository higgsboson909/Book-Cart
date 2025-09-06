import Navbar from "../components/Navbar";
import BookGrid from "../components/BookGrid";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState(0);
  return (
    <div className="w-full ">
      <Navbar cartItems={cartItems}></Navbar>
      <BookGrid
        handleAddItem={() => setCartItems((prev) => prev + 1)}
        handleRemItem={() => setCartItems((prev) => prev - 1)}
      ></BookGrid>
    </div>
  );
};

export default Cart;
