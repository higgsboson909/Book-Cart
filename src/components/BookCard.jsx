import { randomPrice } from "../utils/randomPrice";
import PropTypes from "prop-types";
import { useState } from "react";
import AddToCart from "./AddToCart";
import QuantityField from "./QuantityField";
const BookCard = ({
  data = { id: 1, title: "hi", cover: "", authors: ["hi"] },
}) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="border-2">
      <div className=" flex flex-col">
        <img src={data.cover} alt="" className="" />
        <div className="w-full flex flex-col">
          <div>{data.title}</div>
          <div>{data.authors[0]}</div>
          <div>{`$${randomPrice()}`}</div>
        </div>
        {quantity == 0 ? (
          <AddToCart
            quantity={quantity}
            handleClick={() => {
              setQuantity(1);
            }}
          ></AddToCart>
        ) : (
          <QuantityField
            quantity={quantity}
            handleDec={() => setQuantity((prev) => +prev - 1)}
            handleInc={() => {
              setQuantity((prev) => +prev + 1);
            }}
            setQuantity={setQuantity}
          ></QuantityField>
        )}
      </div>
    </div>
  );
};

BookCard.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    authors: PropTypes.array,
    cover: PropTypes.string,
  }).isRequired,
};

export default BookCard;
