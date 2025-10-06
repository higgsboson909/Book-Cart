import BookCard from "../components/BookCard";
import { useOutletContext } from "react-router";
const Cart = () => {
  const { data, quantities, setQuantities, setCartItems } = useOutletContext();
  const cartData = data?.filter((item) => quantities[item.id + 1] > 0) || [];
  return (
    <>
      <div className="flex justify-center px-6 sm:px-[8vw] md:px-[12vw] lg:px-[12vw] ">
        {cartData.length === 0 ? (
          <p className="pt-15">Your Cart in Empty</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-20 gap-10">
            {cartData.map((item, index) => (
              <BookCard
                key={item.id}
                data={item}
                handleAddItem={() => setCartItems((prev) => +prev + 1)}
                handleRemItem={() => setCartItems((prev) => +prev - 1)}
                quantity={quantities[item.id + 1]}
                setQuantity={setQuantities}
              ></BookCard>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
