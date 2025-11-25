import CartSideBar from "../components/CartSideBar.jsx"
import BooksCarousel from "../components/BooksCarousel.jsx";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useEffect } from "react";
import Categories from "../components/Categories.jsx";
import AuthorOfTheMonth from "../components/AuthorOfMonth.jsx";
const Home = () => {
  useEffect(() => {
    document.title = "BookCart";
  }, []);
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <BooksCarousel></BooksCarousel>
      <AuthorOfTheMonth></AuthorOfTheMonth>
      <CartSideBar></CartSideBar>
    </div>
  );
};

export default Home;
