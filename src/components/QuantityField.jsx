import PropTypes from "prop-types";
import delete_icon from "../assets/delete.png";
const QuantityField = ({
  quantity,
  handleInc,
  handleDec,
  setQuantity,
  handleRemItem,
  itemId,
}) => {
  return (
    <div className="flex items-center justify-center py-0">
      <div className="flex items-center gap-4 bg-gray-50 rounded-xl px-0 py-0 shadow-sm  border-gray-200 border-none">
        <div className="flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden">
          <button
            className="px-3 py-1 text-lg font-semibold text-gray-700 hover:bg-gray-200 transition-colors duration-200"
            onClick={() => {
              handleDec();
              quantity === 1 && handleRemItem();
            }}
          >
            −
          </button>

          <input
            className="w-12 text-center text-sm font-medium text-gray-800 bg-transparent outline-none"
            type="number"
            name="quantity"
            value={quantity}
            onChange={(event) => {
              quantity === 0 && handleRemItem();
              setQuantity((prev) => ({
                ...prev,
                [itemId]: +event.target.value,
              }));
            }}
            onEmptied={(event) => {
              event.preventDefault();
              handleRemItem();
            }}
          />

          <button
            className="px-3 py-1 text-lg font-semibold text-gray-700 hover:bg-gray-200 transition-colors duration-200"
            onClick={handleInc}
          >
            +
          </button>
        </div>

        <button
          className="p-2 rounded-full hover:bg-red-50 transition-colors duration-200"
          onClick={() => {
            setQuantity((prev) => ({ ...prev, [itemId]: 0 }));
            handleRemItem();
          }}
        >
          <img
            src={delete_icon}
            className="w-5 opacity-80 hover:opacity-100"
            alt="delete-button"
          />
        </button>
      </div>
    </div>
  );
};

QuantityField.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleInc: PropTypes.func.isRequired,
  handleDec: PropTypes.func.isRequired,
  setQuantity: PropTypes.func.isRequired,
};

export default QuantityField;
