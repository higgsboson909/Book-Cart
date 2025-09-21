import BookGrid from "../components/BookGrid";
import { useOutletContext } from "react-router";
const Shop = () => {
  const [cartItems, setCartItems] = useOutletContext();
  return (
    <div className="w-full ">
      <BookGrid
        handleAddItem={() => setCartItems((prev) => +prev + 1)}
        handleRemItem={() => setCartItems((prev) => +prev - 1)}
      ></BookGrid>
    </div>
  );
};

export default Shop;
