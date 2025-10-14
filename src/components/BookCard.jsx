import PriceTag from "./PriceTag";
import PropTypes from "prop-types";
import LoveReact from "./LoveReact";
import AddToCart from "./AddToCart";
import QuantityField from "./QuantityField";
import dummy from "../assets/covers/1.jpeg";
import OffBanner from "./OffBanner";
const BookCard = ({
  data = {
    id: 1,
    title: "Book",
    authors: ["Author"],
    cover: dummy,
  },
  handleAddItem,
  handleRemItem,
  quantity = 0,
  setQuantity,
}) => {
  // const [quantity, setQuantity] = useState(0);

  return (
    <div className="relative w-[200px]  bg-white hover:cursor-pointer rounded-sm   transition-shadow duration-300 overflow-hidden">
      <div className=" flex flex-col justify-center items-start pt-7.5">
        <OffBanner percentage={data.percentage}></OffBanner>
        <img src={data.cover} alt={data.title} className="h-60" />
        <div className="w-full flex flex-col items-start pt-2">
          <div className="w-41 hover:underline  text-base font-semibold text-gray-800 line-clamp-2">
            {data.title}
          </div>
          <div className="text-xs text-gray-500">
            {`By: `}
            <span className="text-[#D22129]">{data.authors[0]}</span>
          </div>
          <PriceTag totalprice={data.price}></PriceTag>
          {/* <div className="text-base font-bold text-gray-500">{`$${data.price}`}</div> */}
        </div>
        <div className="w-full flex items-start ml-[0px] justify-self-start  pb-2.5 text-start">
          <div
            className="w-full flex items-center 
            pb-4 gap-2"
          >
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
            <LoveReact></LoveReact>
          </div>
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
