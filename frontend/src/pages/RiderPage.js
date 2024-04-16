import Ride from "../components/Ride";
import GooglemapSection from "../components/GooglemapSection";
import Layout from "../components/Layout";
import ErrorBoundary from "../components/ErrorBoundary";
import { ConnectButton } from "web3uikit";
import console from "console-browserify";
import { useWeb3Contract } from "react-moralis";
import Payment from "../components/Payment";

export default function RiderPage() {
  return (
    <>
      <Layout>
        {" "}
        <div>
          <Payment />
        </div>
        <div>
          <Ride />
        </div>
        <div>
          <ErrorBoundary>
            <GooglemapSection />
          </ErrorBoundary>
        </div>
      </Layout>
    </>
  );
}
