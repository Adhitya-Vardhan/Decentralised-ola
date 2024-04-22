import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";

export default function CarListItem({ car }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const animationStyles = {
    transform: isHovered ? "scale(1.05)" : "scale(1)", // Adjust scaling for desired effect
    transition: "transform 0.3s ease-in-out",
    border: isHovered ? "2px solid #333" : "none",
    borderRadius: isHovered ? "5px" : "0", // Customize transition properties
  };

  return (
    <div>
      <div
        className="flex items-center justify-between mt-5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={animationStyles}
      >
        <div className="flex items-center gap-5">
          <img src={car.images} width={100} height={100} />
          <div>
            <h2 className="font-semibold  text-[18px] flex gap-3 items-center ">
              {car.name}

              <span className="glex gap-2 flex items-center">
                <FaUser /> {car.seat}
              </span>
            </h2>
            <p>{car.desc} </p>
          </div>
        </div>
        <h2 className="text-[18px] font-semibold ">
          {(car.amount * 38).toFixed(2)}{" "}
        </h2>
      </div>
    </div>
  );
}
