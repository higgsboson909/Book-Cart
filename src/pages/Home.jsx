import BooksCarousel from "../components/BooksCarousel.jsx";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.title = "BookCart";
  }, []);
  return (
    <div>
      <Hero></Hero>
      <BooksCarousel title={"Online Bazar Upto 60% Off"}></BooksCarousel>
    </div>
  );
};

export default Home;
