import React from "react";
import console from "console-browserify";
import InputLocation from "./InputLocation";
import RideOptions from "./RideOptions";
import { useContext } from "react";
import { EventsContext } from "../context/EventsContext";
import Dola from "../contract/Dola.json";
import { useWeb3Contract } from "react-moralis";

export default function DriverLocation() {
  const { eve, setEve } = useContext(EventsContext);

  const { runContractFunction: getRiders } = useWeb3Contract({
    abi: Dola.abi,
    contractAddress: process.env.REACT_APP_CONTRACT,
    functionName: "getWaitingRiders",
  });

  const hadleGetRiders = async (e) => {
    e.preventDefault();
    await getRiders({
      onSuccess: (tx) => handleSetonSuccess(tx),
      onError: (error) => console.log(error),
    });
  };

  async function handleSetonSuccess(tx) {
    const receipt = await tx.wait(1);
    console.log(await receipt.events);
    setEve(receipt.events);
    console.log(await receipt.events[0].args.pick.toString());
    console.log("riders are sent");
  }

  return (
    <>
      <div>
        <div className="p-2 md:pd-6 border-[2px] rounded-xl">
          <p className="text-[20px] font-bold">Your Location</p>
          <InputLocation type="source" />

          <button
            className="p-3 bg-black w-full mt-5 text-white rounded-lg "
            onClick={hadleGetRiders}
          >
            Search
          </button>
        </div>
        {eve && <RideOptions />}
      </div>
    </>
  );
}
