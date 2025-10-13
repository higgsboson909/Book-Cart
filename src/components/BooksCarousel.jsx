import Swiper from "swiper";
const BooksCarousel = ({
  title = "Online Book Bazar",
  indicators = 2,
  cards = 7,
}) => {
  return (
    <div>
      <Carousel numVisible={3} numScroll={3} />
    </div>
  );
};

export default BooksCarousel;
