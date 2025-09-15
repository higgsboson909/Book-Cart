import BookCard from "./BookCard";
import { getData } from "../utils/getData";
import { useState, useEffect } from "react";

const BookGrid = ({ handleAddItem, handleRemItem }) => {
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
    <div className="flex justify-center px-6 sm:px-[8vw] md:px-[12vw] lg:px-[12vw] ">
      {loading ? (
        <p className="">Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-20 gap-10">
          {data.map((item, index) => (
            <BookCard key={item.id} data={item}></BookCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookGrid;
