import Layout from "../components/Layout";
import GetRiders from "../components/GetRiders";
import DriveIn from "../components/DriveIn";
import PickRider from "../components/PickRider";
import ParallaxSection from "../components/ParallaxSection";
import RulesSection from "../components/RulesSection";
import DriverProfile from "../components/DriverProfile";
import DriverLocation from "../components/DriverLocation";
import GooglemapSection from "../components/GooglemapSection";

export default function DriverPage() {
  return (
    <>
      <Layout>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <DriverLocation />
          </div>

          <div className="col-span-2">
            {" "}
            <GooglemapSection />{" "}
          </div>
          {/* <div className="container mx-auto">
          <ParallaxSection
            imageSrc="./driver_background.png" // Replace with your image path
            heading="DeRide"
            subheading="Decentralised ride hailing"
          />
          <RulesSection />
        </div>{" "}
        <p>this is driver page</p> */}
        </div>
        {/* <DriveIn />
        <GetRiders />
        <PickRider /> */}
      </Layout>
    </>
  );
}
