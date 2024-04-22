import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import PickRider from "./PickRider";

export default function RideListItems({ ride }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const animationStyles = {
    transform: isHovered ? "scale(1.05)" : "scale(1)", // Adjust scaling for desired effect
    transition: "transform 0.3s ease-in-out",
    border: isHovered ? "2px solid #333" : "none",
    borderRadius: isHovered ? "5px" : "0", // Customize transition properties
    padding: "3px",
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
          <img src="./rider_1.png" width={100} height={100} />
          <div>
            <h2 className="font-semibold  text-[18px] flex gap-3 items-center ">
              id:{ride.args.riderNumber.toString()}
            </h2>
            <p>From :{ride.args.pick.toString()} </p>
            <p>To :{ride.args.drop.toString()}</p>
          </div>
        </div>
        <h2 className="text-[18px] font-semibold ">
          <PickRider id={ride.args.riderNumber.toString()} />
        </h2>
      </div>
    </div>
  );
}
