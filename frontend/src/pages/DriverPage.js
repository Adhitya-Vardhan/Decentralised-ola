import Layout from "../components/Layout";
import GetRiders from "../components/GetRiders";
import DriveIn from "../components/DriveIn";
import PickRider from "../components/PickRider";

export default function DriverPage() {
  return (
    <>
      <Layout>
        {" "}
        <p>this is driver page</p>
        <DriveIn />
        <GetRiders />
        <PickRider />
      </Layout>
    </>
  );
}
