import { useWeb3Contract } from "react-moralis";
import console from "console-browserify";
import Dola from "../contract/Dola.json";
import { useState } from "react";

export default function PickRider({ id }) {
  const [clicked, setClicked] = useState(false);

  const { runContractFunction: selectRider } = useWeb3Contract({
    abi: Dola.abi,
    contractAddress: process.env.REACT_APP_CONTRACT,
    functionName: "pickRider",
    params: {
      riderNumber: id,
      arrivalTime: 12,
    },
  });

  const handleSelectRider = async (e) => {
    e.preventDefault();
    await selectRider({
      onSuccess: (tx) => handleSetonSuccess(tx),
      onError: (error) => console.log(error),
    });
    setClicked(true);
  };

  async function handleSetonSuccess(tx) {
    const receipt = await tx.wait(1);
    console.log(await receipt.events[0]);
    console.log("rider picked");
  }

  return (
    <>
      <button
        className={`relative px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
          clicked ? "animate-pulse" : ""
        }`}
        onClick={handleSelectRider}
      >
        <span className="z-10 relative">
          {clicked ? "Clicked!" : "Click Me"}
        </span>
        <span
          className={`absolute inset-0 bg-blue-500 rounded-lg transition-transform ${
            clicked ? "animate-scale" : ""
          }`}
        ></span>
      </button>
    </>
  );
}
