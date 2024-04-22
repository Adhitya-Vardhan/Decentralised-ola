import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="./driver_background.png"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>Ride Share Earn</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Decentralised Ride
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Ride sharing, reimagined. Owned by the riders, powered by the
            community.
          </p>
          <button className=" text-white ">Enter now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
