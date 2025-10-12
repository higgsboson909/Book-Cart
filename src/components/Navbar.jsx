import PropTypes from "prop-types";
import { useState } from "react";
import back_arrow from "../assets/arrow.png";
import logo from "../assets/logo.png";
import menu_icon from "../assets/menu_icon.png";
import { NavLink } from "react-router";

const Navbar = ({ cartItems }) => {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: `Cart (${0 || cartItems()})`, path: "/cart" },
  ];
  return (
    <div className="flex items-center justify-between py-5 font-medium  text-lg px-6 sm:px-[8vw] md:px-[10vw] lg:px-[20vw] ">
      <NavLink to="/">
        <div className="flex gap-1 sm:gap-3 items-center justify-center">
          <img src={logo} className="w-8 sm:w-12 h-auto" alt="logo" />
          <h1 className="text-lg sm:text-2xl text-center sm:font-normal sansation-regular md:font-semibold">
            BookCart
          </h1>
        </div>
      </NavLink>
      <ul className="hidden sm:flex gap-5 text-sm sm:text-base md:text-lg text-gray-700">
        <div className="flex flex-col justify-center gap-1 items-center">
          <nav className="flex space-x-6">
            {links.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  ` py-0 text-gray-700 transition hover:border-black border-b-2 
                ${isActive ? "border-black" : "border-transparent"}`
                }
                key={link.key}
                to={link.path}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
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
        <div className="flex flex-col text-gray-500 px-[2px]">
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
          <hr className=" border-none bg-[#f5f5f5]"></hr>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-full px-4 py-1 cursor-pointer  transition 
     ${isActive ? "bg-black text-white" : "text-gray-800 hover:bg-gray-100"}`
            }
            onClick={() => setShowMenu(false)}
          >
            Home
          </NavLink>
          <hr className="h-1 border-none bg-gray-300"></hr>

          <NavLink
            to="/Shop"
            className={({ isActive }) =>
              `block w-full px-4 py-1 cursor-pointer  transition ${isActive ? "bg-black text-white" : "text-gray-800"}`
            }
            onClick={() => setShowMenu(false)}
          >
            Shop
          </NavLink>
          <hr className="h-1 border-none bg-gray-300"></hr>

          <NavLink
            to="/Cart"
            className={({ isActive }) =>
              `block w-full px-4 py-1 cursor-pointer  transition ${isActive ? "bg-black text-white" : "text-gray-800"}`
            }
            onClick={() => setShowMenu(false)}
          >
            Cart{`(${cartItems()})`}
          </NavLink>

          <hr className="h-1 border-none bg-gray-300"></hr>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  cartItems: PropTypes.number.isRequired,
};
export default Navbar;
