import { useWeb3Contract } from "react-moralis";
import console from "console-browserify";
import Dola from "../contract/Dola.json";

export default function Drivein() {
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

  return (
    <>
      <button onClick={handleDrive}>drive</button>
    </>
  );
}
