import book_hero from "../assets/book_hero.png";
const Hero = () => {
  return (
    <div className="px-6 sm:px-[8vw] md:px-[10vw] lg:px-[8vw]">
      <div className=" flex flex-col sm:flex-row border-gray-400 border-[1px] justify-center items-center  ">
        <div className="w-full sm:w-1/2 flex justify-center py-10 sm:py-0 items-center ">
          <div className="text-[#034959]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-lg">
                Books of the Month
              </p>
            </div>
            <h1 className="text-3xl sm:py-3 lg-text-5xl leading-relaxed sansation-regular font-bold">
              SEPTEMBER
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-lg">Shop Now</p>
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            </div>
          </div>
        </div>

        <img src={book_hero} className="w-full sm:w-1/2 " alt="" />
      </div>
    </div>
  );
};

export default Hero;
