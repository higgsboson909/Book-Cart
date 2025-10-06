import PropTypes from "prop-types";
import AddToCart from "./AddToCart";
import QuantityField from "./QuantityField";
const BookCard = ({
  data = { id: 1, title: "hi", cover: "", authors: ["hi"] },
  handleAddItem,
  handleRemItem,
  quantity,
  setQuantity,
}) => {
  // const [quantity, setQuantity] = useState(0);

  return (
    <div className="border-2 w-50">
      <div className=" flex flex-col">
        <img src={data.cover} alt="" className="p-3  h-60 w-55" />
        <div className="w-full flex flex-col">
          <div className="w-full mx-auto p-2 text-sm">{data.title}</div>
          <div className="text-xs">{data.authors[0]}</div>
          <div className="text-base">{`$${data.price}`}</div>
        </div>
        {quantity === 0 ? (
          <AddToCart
            quantity={quantity}
            handleClick={() => {
              setQuantity((prev) => ({ ...prev, [data.id + 1]: 1 }));
              handleAddItem();
            }}
          ></AddToCart>
        ) : (
          <QuantityField
            quantity={quantity}
            handleDec={() =>
              setQuantity((prev) => ({
                ...prev,
                [data.id + 1]: +prev[data.id + 1] - 1,
              }))
            }
            handleInc={() => {
              setQuantity((prev) => ({
                ...prev,
                [data.id + 1]: +prev[data.id + 1] + 1,
              }));
            }}
            setQuantity={setQuantity}
            handleRemItem={handleRemItem}
            itemId={data.id + 1}
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
  handleAddItem: PropTypes.func.isRequired,
  handleRemItem: PropTypes.func.isRequired,
};

export default BookCard;
