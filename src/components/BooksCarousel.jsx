import "../book_carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookCard from "./BookCard";

const BooksCarousel = () => {
  const books = [
    {
      id: 1,
      title: "The Kite Runner",
      authors: ["Khaled Hosseini"],
      price: 14.99,
      cover:
        "https://m.media-amazon.com/images/I/81AfHC8pK9L._AC_UF1000,1000_QL80_.jpg",
      percentage: 20,
    },
    {
      id: 2,
      title: "Atomic Habits",
      authors: ["James Clear"],
      price: 11.99,
      cover:
        "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
      percentage: 10,
    },
    {
      id: 4,
      title: "The Alchemist",
      authors: ["Paulo Coelho"],
      price: 10.99,
      cover:
        "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
      percentage: 5,
    },
    {
      id: 3,
      title: "1984",
      authors: ["George Orwell"],
      price: 9.99,
      cover:
        "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
      percentage: 15,
    },
    {
      id: 5,
      title: "The Alchemist",
      authors: ["Paulo Coelho"],
      price: 10.99,
      cover:
        "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
      percentage: 5,
    },
    {
      id: 6,
      title: "The L Runner",
      authors: ["Khaled Hosseini"],
      price: 14.99,
      cover:
        "https://m.media-amazon.com/images/I/81AfHC8pK9L._AC_UF1000,1000_QL80_.jpg",
      percentage: 20,
    },
    {
      id: 7,
      title: "Atomic ",
      authors: ["James Clear"],
      price: 11.99,
      cover:
        "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
      percentage: 10,
    },
  ];

  return (
    <div className="w-full flex justify-center px-20 max-md:px-10 max-sm:px-5 py-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1124: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard data={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BooksCarousel;
