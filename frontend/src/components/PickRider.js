import { useWeb3Contract } from "react-moralis";
import console from "console-browserify";
import Dola from "../contract/Dola.json";

export default function PickRider() {
  const { runContractFunction: selectRider } = useWeb3Contract({
    abi: Dola.abi,
    contractAddress: process.env.REACT_APP_CONTRACT,
    functionName: "pickRider",
    params: {
      riderNumber: 0,
      arrivalTime: 12,
    },
  });

  const handleSelectRider = async (e) => {
    e.preventDefault();
    await selectRider({
      onSuccess: (tx) => handleSetonSuccess(tx),
      onError: (error) => console.log(error),
    });
  };

  async function handleSetonSuccess(tx) {
    const receipt = await tx.wait(1);
    console.log(await receipt.events[0]);
    console.log("rider picked");
  }

  return (
    <>
      <button onClick={handleSelectRider}>select Riders</button>
    </>
  );
}
