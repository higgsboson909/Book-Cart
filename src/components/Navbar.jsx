import PropTypes from "prop-types";
import { useState } from "react";
import back_arrow from "../assets/arrow.png";
import logo from "../assets/logo.png";
import menu_icon from "../assets/menu_icon.png";

const Navbar = ({ cartItems }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium  text-lg px-6 sm:px-[8vw] md:px-[10vw] lg:px-[20vw] ">
      <div className="flex gap-1 sm:gap-3 items-center justify-center">
        <img src={logo} className="w-8 sm:w-12 h-auto" alt="logo" />
        <h1 className="text-lg sm:text-2xl text-center sm:font-normal sansation-regular md:font-semibold">
          BookCart
        </h1>
      </div>
      <ul className="hidden sm:flex gap-5 text-sm sm:text-base md:text-lg text-gray-700">
        <div className="flex flex-col justify-center gap-1 items-center">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px]  bg-gray-800 " />
        </div>

        <div className="flex flex-col justify-center gap-1 items-center">
          <p>Shop</p>
          <hr className="w-2/4 border-none h-[1.5px]  bg-gray-800 " />
        </div>

        <div className="flex flex-col justify-center gap-1 items-center">
          <p>Cart{` (${cartItems})`}</p>
          <hr className="w-2/4 border-none h-[1.5px]  bg-gray-800 " />
        </div>
      </ul>
      <img
        src={menu_icon}
        onClick={() => setShowMenu(true)}
        className="sm:hidden w-6 cursor-pointer"
      />

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden transition-all bg-white ${showMenu ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-500">
          <div
            onClick={() => setShowMenu(false)}
            className="flex  items-center gap-2 p-2 cursor-pointer"
          >
            <img
              src={back_arrow}
              className="rotate-90 h-4 w-4"
              alt="back-arrow"
            />
            <p>Back</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  cartItems: PropTypes.number.isRequired,
};
export default Navbar;
