import PropTypes from "prop-types";
import delete_icon from "../assets/delete.png";
const QuantityField = ({
  quantity,
  handleInc,
  handleDec,
  setQuantity,
  handleRemItem,
}) => {
  return (
    <div className="w-50  h-8 m-auto ">
      <div className="flex justify-around">
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
          <div className="w-1/2 px-3">
            <input
              className="w-full outline-none m-auto"
              type="number"
              name="quantity"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
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
            setQuantity(0);
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
