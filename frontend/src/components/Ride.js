import InputLocation from "./InputLocation";
import "../styles/Ride.css";
import Dola from "../contract/Dola.json";
import console from "console-browserify";
import { useWeb3Contract } from "react-moralis";
import { useContext, useEffect } from "react";
import { SourceContext } from "../context/SourceContext";
import { DestinationContext } from "../context/DestinationContext";

export default function Ride() {
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const cost = 23;

  useEffect(() => {
    if (source) {
      console.log(source);
    }
  }, [source]);

  const { runContractFunction: requestRide } = useWeb3Contract({
    abi: Dola.abi,
    contractAddress: process.env.REACT_APP_CONTRACT,
    functionName: "rideRequest",
    params: { pick: source, drop: destination, tripCost: cost },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await requestRide({
      onSuccess: (tx) => handleSetOnSuccess(tx),
      onErro: (error) => console.log(error),
    });
  };

  async function handleSetOnSuccess(tx) {
    await tx.wait(1);

    console.log("ride requested");
  }

  return (
    <>
      <div className="rider_form">
        <p>get ride</p>
        <InputLocation type="source" />
        <InputLocation type="destination" />

        <button onClick={handleSubmit}>search</button>
      </div>
    </>
  );
}
