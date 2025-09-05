import AddToCart from "./AddToCart";
const BookCard = () => {
  return (
    <div className="border-2">
      <div className=" flex flex-col">
        <img src="" alt="" className="" />
        <div className="w-full flex flex-col">
          <div>Pakistan is Good</div>
          <div>Author salman</div>
          <div>$45.99</div>
        </div>
        <AddToCart></AddToCart>
      </div>
    </div>
  );
};

export default BookCard;
