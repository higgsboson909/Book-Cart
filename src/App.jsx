import "./App.css";
import Hero from "./components/Hero";
import BookGrid from "./components/BookGrid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full ">
      <Navbar></Navbar>

      {/* <Hero></Hero> */}
      <BookGrid></BookGrid>
    </div>
  );
}

export default App;
