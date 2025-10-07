import PropTypes from "prop-types";
import { useState } from "react";
import back_arrow from "../assets/arrow.png";
import logo from "../assets/logo.png";
import menu_icon from "../assets/menu_icon.png";
import { Link } from "react-router";

const Navbar = ({ cartItems }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: `Cart (${0 || cartItems()})`, path: "/cart" },
  ];
  return (
    <div className="flex items-center justify-between py-5 font-medium  text-lg px-6 sm:px-[8vw] md:px-[10vw] lg:px-[20vw] ">
      <Link to="/">
        <div className="flex gap-1 sm:gap-3 items-center justify-center">
          <img src={logo} className="w-8 sm:w-12 h-auto" alt="logo" />
          <h1 className="text-lg sm:text-2xl text-center sm:font-normal sansation-regular md:font-semibold">
            BookCart
          </h1>
        </div>
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm sm:text-base md:text-lg text-gray-700">
        <div className="flex flex-col justify-center gap-1 items-center">
          <nav className="flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                onClick={() => setActiveLink(link.key)}
              >
                {link.name}
              </Link>
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
          <hr className="h-3"></hr>

          <Link to="/">
            <div
              className="w-full px-4 pb-2 cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              Home
            </div>
          </Link>
          <hr className="h-3"></hr>

          <Link to="/Shop">
            <div
              className="px-4 pb-2 cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              Shop
            </div>
          </Link>
          <hr className="h-3"></hr>

          <Link to="/Cart">
            <div
              className="px-4 pb-2 cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              Cart{`(${cartItems()})`}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  cartItems: PropTypes.number.isRequired,
};
export default Navbar;
