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
      cover: `https://covers.openlibrary.org/b/id/${item.work.cover_id}-L.jpg`,
      authors: item.work.author_names,
      price: price[index],
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};
export { getData };
