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
    <div className=" max-w-xs bg-white rounded-2xl border border-gray-300 transition-shadow duration-300  overflow-hidden">
      <div className="flex flex-col items-center pt-2.5">
        <img
          src={data.cover}
          alt={data.title}
          className="h-75 w-auto object-contain "
        />
        <div className="w-60 flex flex-col items-start px-4 py-2 space-y-1 text-ellipsis">
          <div className="text-base font-semibold text-gray-800 line-clamp-2 text-ellipsis">
            {data.title}
          </div>
          <div className="text-sm text-gray-500">{data.authors[0]}</div>
          <div className="text-lg font-bold text-gray-500">{`$${data.price}`}</div>
        </div>
        <div className="w-full px-4 pb-2.5">
          {quantity === 0 ? (
            <AddToCart
              quantity={quantity}
              handleClick={() => {
                setQuantity((prev) => ({ ...prev, [data.id + 1]: 1 }));
                handleAddItem();
              }}
            />
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
            />
          )}
        </div>
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
