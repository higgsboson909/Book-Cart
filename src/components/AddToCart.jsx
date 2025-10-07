import PropTypes from "prop-types";
const AddToCart = ({ handleClick }) => {
  return (
    <div className="w-full px-4 pb-4">
      <button
        className="w-full py-2 text-sm font-semibold text-white bg-[#034959] rounded-lg shadow-sm hover:bg-[#134961] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1"
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

AddToCart.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default AddToCart;
