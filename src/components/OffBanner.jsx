const OffBanner = ({ percentage = 100 }) => {
  return (
    <div className="absolute hover:cursor top-1 left-[0px] bg-red-500 text-white text-xs font-semibold pl-2 pr-3 py-1 rounded-tl-md shadow-md banner-slash">
      -{percentage}%
    </div>
  );
};

export default OffBanner;
