import Ride from "../components/Ride";
import GooglemapSection from "../components/GooglemapSection";
import Layout from "../components/Layout";
import ErrorBoundary from "../components/ErrorBoundary";
import console from "console-browserify";
import { useWeb3Contract } from "react-moralis";
import Payment from "../components/Payment";

export default function RiderPage() {
  return (
    <>
      <Layout>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* <div>
            <Payment />
          </div> */}
          <div>
            <Ride />
          </div>
          <div className="col-span-2">
            <ErrorBoundary>
              <GooglemapSection />
            </ErrorBoundary>
          </div>
        </div>
      </Layout>
    </>
  );
}
