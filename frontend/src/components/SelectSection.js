import React, { useState } from "react";
import console from "console-browserify";
import { useWeb3Contract } from "react-moralis";
import Dola from "../contract/Dola.json";

export default function SelectSection() {
  const [nextPageLink, setNextPageLink] = useState(null);

  const { runContractFunction: drive } = useWeb3Contract({
    abi: Dola.abi,
    contractAddress: process.env.REACT_APP_CONTRACT,
    functionName: "driveRequest",
  });

  const handleDrive = async (e) => {
    e.preventDefault();
    await drive({
      onSuccess: (tx) => handleSetOnSuccess(tx),
      onError: (error) => console.log(error),
    });
  };

  async function handleSetOnSuccess(tx) {
    await tx.wait(1);
    console.log("drive signed successfully");
  }

  const handleClick1 = () => {
    // Simulate function execution (replace with your actual logic)
    console.log("Function 1 executed!");
    setNextPageLink("/rider"); // Set link after function execution
  };

  const handleClick2 = () => {
    // Simulate function execution (replace with your actual logic)
    console.log("Function 2 executed!");
    setNextPageLink("/drive"); // Set link after function execution
  };

  return (
    <div className="section flex flex-col justify-center items-center mt-10">
      <div className="image-button-container flex justify-center gap-10">
        <div className="image-button flex flex-col items-center">
          <img
            src="./rider.png"
            alt="Image 1 Description"
            className="w-40 h-40 object-cover rounded-lg mb-4"
          />
          <button
            onClick={handleClick1}
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
          >
            Rider
          </button>
        </div>
        <div className="image-button flex flex-col items-center">
          <img
            src="./driver.png"
            alt="Image 2 Description"
            className="w-40 h-40 object-cover rounded-lg mb-4"
          />
          <button
            onClick={handleDrive}
            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700"
          >
            Driver
          </button>
        </div>
      </div>
      {nextPageLink && (
        <a href={nextPageLink} className="text-blue-500 underline mt-4">
          Go to Next Page
        </a>
      )}
    </div>
  );
}
