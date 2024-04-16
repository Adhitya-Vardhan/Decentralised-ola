import { useWeb3Contract } from "react-moralis";
import console from "console-browserify";
import Dola from "../contract/Dola.json";

export default function GetRiders() {
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
    console.log(await receipt.events[0].args.pick.toString());
    console.log("riders are sent");
  }

  return (
    <>
      <button onClick={hadleGetRiders}>get Riders</button>
    </>
  );
}
