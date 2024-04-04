import Ride from "../components/Ride";
import GooglemapSection from "../components/GooglemapSection";
import Layout from "../components/Layout";
import { ConnectButton } from "web3uikit";
export default function RiderPage() {
  return (
    <>
      <ConnectButton />
      <div>
        <Ride />
      </div>
      <div>
        <GooglemapSection />
      </div>
    </>
  );
}
