import BookCard from "./BookCard";
const BookGrid = () => {
  return (
    <div className="px-6 sm:px-[8vw] md:px-[10vw] lg:px-[8vw] ">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
      </div>
    </div>
  );
};

export default BookGrid;
