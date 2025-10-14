import { useEffect } from "react";
import BookGrid from "../components/BookGrid";
import { useOutletContext } from "react-router";
const Shop = () => {
  useEffect(() => {
    document.title = "Shop | BookCart";
  });
  return (
    <div className="w-full ">
      <BookGrid></BookGrid>
    </div>
  );
};

export default Shop;
