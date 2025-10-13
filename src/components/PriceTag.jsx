const PriceTag = ({ totalprice = 2000, offpercentage = 90 }) => {
  const discountedPrice = (
    totalprice -
    (totalprice * offpercentage) / 100
  ).toFixed(2);

  return (
    <div className="flex items-center gap-2 text-sm">
      {/* Old Price */}
      <span className="text-red-500 line-through font">Rs. {totalprice}</span>

      {/* New Discounted Price */}
      <span className="text-gray-800 font-medium">Rs. {discountedPrice}</span>
    </div>
  );
};

export default PriceTag;
