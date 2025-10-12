import cover1 from "../assets/covers/1.jpeg";
import cover2 from "../assets/covers/2.jpeg";
import cover3 from "../assets/covers/3.jpeg";
import cover4 from "../assets/covers/4.jpeg";
import cover5 from "../assets/covers/5.jpeg";
import cover6 from "../assets/covers/6.jpg";
import cover7 from "../assets/covers/7.png";
import cover8 from "../assets/covers/8.jpeg";
import cover9 from "../assets/covers/9.jpg";
import cover10 from "../assets/covers/10.jpg";
import cover11 from "../assets/covers/11.jpeg";
import cover12 from "../assets/covers/12.jpg";
import cover13 from "../assets/covers/13.jpg";
import cover14 from "../assets/covers/14.jpg";
import cover15 from "../assets/covers/15.jpg";
import cover16 from "../assets/covers/16.jpg";
import cover17 from "../assets/covers/17.jpg";
import cover18 from "../assets/covers/18.jpg";
import cover19 from "../assets/covers/19.jpg";
import cover20 from "../assets/covers/20.jpg";

const covers = [
  cover1,
  cover2,
  cover3,
  cover4,
  cover5,
  cover6,
  cover7,
  cover8,
  cover9,
  cover10,
  cover11,
  cover12,
  cover13,
  cover14,
  cover15,
  cover16,
  cover17,
  cover18,
  cover19,
  cover20,
];

import { price } from "./price";
const getData = async () => {
  try {
    const response = await fetch(
      "https://openlibrary.org/people/mekBot/books/currently-reading.json",
      { mode: "cors" },
    );
    if (response.status >= 400) {
      throw new Error("Network Error");
    }

    const booksData = await response.json();
    return booksData.reading_log_entries.map((item, index) => ({
      id: index,
      title: item.work.title,
      cover: covers[index],
      authors: item.work.author_names,
      price: price[index],
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};
export { getData };
