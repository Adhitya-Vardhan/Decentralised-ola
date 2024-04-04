import InputLocation from "./InputLocation";
import "../styles/Ride.css";

export default function Ride() {
  return (
    <>
      <div className="rider_form">
        <p>get ride</p>
        <InputLocation type="source" />
        <InputLocation type="destination" />

        <button>search</button>
      </div>
    </>
  );
}
