import { useWeb3Contract } from "react-moralis";
import console from "console-browserify";
import Dola from "../contract/Dola.json";

export default function Drivein() {
  const { runContractFunction: pay } = useWeb3Contract({
    abi: Dola.abi,
    contractAddress: process.env.REACT_APP_CONTRACT,
    functionName: "payDriver",
    msgValue: 1,
  });

  const handleDrive = async (e) => {
    e.preventDefault();
    await pay({
      onSuccess: (tx) => handleSetOnSuccess(tx),
      onError: (error) => console.log(error),
    });
  };

  async function handleSetOnSuccess(tx) {
    const receipt = await tx.wait(1);
    console.log(await receipt.events);

    console.log("payment done");
  }

  return (
    <>
      <button onClick={handleDrive}>Pay Driver</button>
    </>
  );
}
