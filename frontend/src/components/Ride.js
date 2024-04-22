import InputLocation from "./InputLocation";
import "../styles/Ride.css";
import Dola from "../contract/Dola.json";
import console from "console-browserify";
import { useWeb3Contract } from "react-moralis";
import { useContext, useEffect } from "react";
import { SourceContext } from "../context/SourceContext";
import { DestinationContext } from "../context/DestinationContext";
import CarListOptions from "./CarListOptions";

export default function Ride() {
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const cost = 22;

  function __blockifyCoords(loc) {
    if (!loc || typeof loc !== "object" || !loc.lat || !loc.lng) {
      return [0, 0]; // or any default values you prefer
    }
    return [
      Math.round(parseFloat(loc.lat) * 1000000),
      Math.round(parseFloat(loc.lng) * 1000000),
    ];
  }

  const { runContractFunction: requestRide } = useWeb3Contract({
    abi: Dola.abi,
    contractAddress: process.env.REACT_APP_CONTRACT,
    functionName: "rideRequest",
    params: {
      pick: __blockifyCoords(source),
      drop: __blockifyCoords(destination),
      tripCost: cost,
    },
  });

  async function handleSetOnSuccess(tx) {
    await tx.wait(1);

    console.log("ride requested");
  }

  return (
    <>
      <div>
        <div className="p-2 md:pd-6 border-[2px] rounded-xl">
          <p className="text-[20px] font-bold">get ride</p>
          <InputLocation type="source" />
          <InputLocation type="destination" />

          <button
            className="p-3 bg-black w-full mt-5 text-white rounded-lg "
            onClick={async (event) => {
              event.preventDefault();
              console.log("button is pressed ");
              await requestRide({
                onSuccess: (tx) => handleSetOnSuccess(tx),
                onErro: (error) => console.log(error),
              });
            }}
          >
            Search
          </button>
        </div>
        <CarListOptions />
      </div>
    </>
  );
}

// const handleSubmit = async (event) => {
//   await requestRide({
//     onSuccess: (tx) => handleSetOnSuccess(tx),
//     onErro: (error) => console.log(error),
//   });
// };
