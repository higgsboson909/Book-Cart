import { ShoppingCart } from "lucide-react";
import PropTypes from "prop-types";
const AddToCart = ({ handleClick }) => {
  return (
    <div className="justify-self-start pt-1 hover:cursor-pointer">
      <button
        className="w-full flex hover:cursor-pointer justify-center  items-center pl-1 pr-2 py-1 text-[12px]  text-white bg-red-500 rounded-sm shadow-sm hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1"
        onClick={handleClick}
      >
        <ShoppingCart height={14}></ShoppingCart>
        <div className="text-center">Add to Cart</div>
      </button>
    </div>
  );
};

AddToCart.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default AddToCart;
