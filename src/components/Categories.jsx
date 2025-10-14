import romanceImg from "../assets/categories/romance.png";
import trendingNowImg from "../assets/categories/trending_now.png";
import selfHelpImg from "../assets/categories/self_help.png";
import bestSellersImg from "../assets/categories/best_sellers.jpeg";
import fantasyImg from "../assets/categories/fantasy.png";
import urduImg from "../assets/categories/urdu.png";

const defaultCategories = [
  { name: "Romance", img: romanceImg },
  { name: "Trending Now", img: trendingNowImg },
  { name: "Self Help", img: selfHelpImg },
  { name: "Bestsellers", img: bestSellersImg },
  { name: "Fantasy", img: fantasyImg },
  { name: "Urdu Books", img: urduImg },
];

const Categories = ({ categories = defaultCategories }) => {
  return (
    <div className="w-full pt-8 px-6 sm:px-[8vw] md:px-[10vw] lg:px-[13vw]">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="w-13 sm:w-16  md:w-20  mb-2">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <p className="text-[12px] sm:text-[15px] md:text-sm lg:text-base font-medium text-gray-700">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
