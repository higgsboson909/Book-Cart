import React, { useState } from "react";
import { Heart } from "lucide-react";
const LoveReact = () => {
  const [active, setActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setActive(!active);
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };
  return (
    <Heart
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      className={`w-6  cursor-pointer transition-all duration-200 
    ${active ? "text-red-600 fill-red-600" : "text-gray-400"} 
    ${isAnimating ? "animate-beat" : ""}
  `}
    />
  );
};

export default LoveReact;
