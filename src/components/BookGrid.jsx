import { useOutletContext } from "react-router";
import BookCard from "./BookCard";

const BookGrid = ({ handleAddItem, handleRemItem }) => {
  const { data, loading, quantities, setQuantities } = useOutletContext();
  console.log("heer i am", data);
  return (
    <div className="flex justify-center px-6 sm:px-[8vw] md:px-[12vw] lg:px-[12vw] ">
      {loading ? (
        <p className="">Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-20 gap-10">
          {data.map((item, index) => (
            <BookCard
              key={item.id}
              data={item}
              handleAddItem={handleAddItem}
              handleRemItem={handleRemItem}
              quantity={quantities[item.id + 1]}
              setQuantity={setQuantities}
            ></BookCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookGrid;
