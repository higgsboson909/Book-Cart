const CartSideBar = ({ isOpen, handleClose }) => {
  let closedClass =
    "translate-x-full transition-transform duration-300 ease-out";
  return (
    <div
      className={` z-20 fixed top-0 right-0 h-full border max-[641px]:w-5/6 w-[390px] bg-[#F0F0F0] flex flex-col ${isOpen ? " duration-300 translate-x-0" : closedClass}`}
    >
      <div className="bg-white p-5 flex justify-between items-center">
        <div>Shopping Cart</div>
        <button
          onClick={() => handleClose((prev) => !prev)}
          className="text-white bg-red-500 py-1 px-4 rounded-2xl"
        >
          Close
        </button>
      </div>
      <div className="h-full"></div>
      <div className="p-5 bg-white">
        <div>Checkout</div>
      </div>
    </div>
  );
};

export default CartSideBar;
