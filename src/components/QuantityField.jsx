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
    <div className="h-8 m-auto px-2 flex  items-center">
      <div className="w-50 text-center mx-auto  flex justify-center gap-10 pr-3">
        <div className="w-2/4 flex justify-center items-center border-2">
          <button
            className="w-1/4 m-auto text-center bg-amber-300"
            onClick={() => {
              handleDec();
              quantity === 1 && handleRemItem();
            }}
          >
            -
          </button>
          <div className="w-1/2 px-1">
            <input
              className="w-full outline-none m-auto"
              type="number"
              name="quantity"
              value={quantity}
              onChange={(event) => {
                quantity === 0 && handleRemItem();
                setQuantity(+event.target.value);
                console.log(quantity);
              }}
              onEmptied={(event) => {
                event.preventDefault();
                handleRemItem();
              }}
            />
          </div>
          <button
            className="w-1/4 m-auto text-center bg-amber-300"
            onClick={handleInc}
          >
            +
          </button>
        </div>
        <div
          className=" text-center"
          onClick={() => {
            setQuantity((prev) => ({ ...prev, [itemId]: 0 }));
            handleRemItem();
          }}
        >
          <img src={delete_icon} className="w-6" alt="delete-button" />
        </div>
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
