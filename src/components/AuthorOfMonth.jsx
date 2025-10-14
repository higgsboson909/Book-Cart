import React from "react";
import authorImg from "../assets/author_of_month.png";
import book1 from "../assets/author_img1.jpg";
import book2 from "../assets/author_img2.jpg";
import book3 from "../assets/author_img3.jpg";

const defaultAuthor = {
  name: "Dan Brown",
  img: authorImg,
  bio: "Dan Brown is the bestselling author of Digital Fortress, Deception Point, Angels and Demons, The Da Vinci Code, The Lost Symbol and most recently, Inferno. Three of his Robert Langdon novels have been adapted for the screen by Ron Howard, starring Tom Hanks. They have all been international blockbusters. His new Robert Langdon thriller, Origin will be out on 3rd October 2017.",
  books: [
    {
      title: "Inferno",
      img: book1,
    },
    {
      title: "The Da Vinci Code",
      img: book2,
    },
    {
      title: "Angels and Demons",
      img: book3,
    },
  ],
};

const AuthorOfTheMonth = ({ author = defaultAuthor }) => {
  return (
    <div className="w-full pt-6 pb-10 px-6 sm:px-[8vw] md:px-[10vw] lg:px-[13vw]">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold eb-garamond-h3 mb-3 text-center">
        Author of the Month
      </h2>

      {/* Outer Container */}
      <div className="grid grid-cols-1  md:grid-cols-1 xl:grid-cols-5 gap-6 border border-gray-300 rounded-lg p-6 md:p-10 bg-white shadow-sm">
        {/* Author Info Section */}
        <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left bg-red-500 text-white rounded-lg p-8 shadow-md">
          <img
            src={author.img}
            alt={author.name}
            className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-full shadow-lg mb-5 border-4 border-white"
          />
          <h3 className="text-xl md:text-2xl font-bold mb-2">{author.name}</h3>
          <p className="text-sm md:text-base leading-relaxed opacity-90">
            {author.bio}
          </p>
        </div>

        {/* Books Section */}
        <div className="max-md:hidden lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-5 place-items-center">
          {author.books.map((book, index) => (
            <div
              key={index}
              className=" px-1 flex flex-col items-center w-full"
            >
              <img
                src={book.img}
                alt={book.title}
                className="w-42 rounded-md mb-3"
              />
              <h4 className="text-sm md:text-base font-medium text-center text-gray-700">
                {book.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorOfTheMonth;
