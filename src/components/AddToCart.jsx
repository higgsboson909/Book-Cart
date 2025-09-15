import PropTypes from "prop-types";
const AddToCart = ({ handleClick }) => {
  return (
    <div className="w-48  border-2 h-8 m-auto">
      <button className="w-full m-auto text-center" onClick={handleClick}>
        Add to cart
      </button>
    </div>
  );
};

AddToCart.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default AddToCart;
