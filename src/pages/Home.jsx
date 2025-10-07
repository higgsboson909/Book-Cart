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
    </div>
  );
};

export default Home;
