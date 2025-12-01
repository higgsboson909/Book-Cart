const DiscountBanner = ({
  text = "Extra 10% off all orders from 12 to 9 am with",
  coupon = "MIDNIGHT10",
}) => {
  return (
    <div className="text-center bg-[#d22129] flex justify-center py-3 ">
      <div className="text-white">{text}</div>
      <div className="bg-amber-500 font-bold ml-2 px-2 rounded-md text-shadow-amber-700">
        {coupon}
      </div>
    </div>
  );
};

export default DiscountBanner;
