import InputLocation from "./InputLocation";

export default function Ride() {
  return (
    <>
      <div>
        <p>get ride</p>
        <InputLocation type="source" />
        <InputLocation type="destination" />

        <button>serach</button>
      </div>
    </>
  );
}
