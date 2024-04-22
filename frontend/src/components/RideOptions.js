import React, { useContext } from "react";
import { EventsContext } from "../context/EventsContext";
import RideListItems from "./RideListItems";

export default function RideOptions() {
  const { eve } = useContext(EventsContext);
  if (!eve) {
    return (
      <div className="mt-5 p-5">
        <p className="text-[22px] font-bold">
          No rides available, please fetch again
        </p>
      </div>
    );
  }
  return (
    <div className="mt-5 p-5 overflow-auto h-[500px] ">
      <h2 className="text-[22px] font-bold "> Rides </h2>
      {eve.map((item) => (
        <div key={item.args.riderNumber.toString()}>
          <RideListItems ride={item} />
        </div>
      ))}
    </div>
  );
}
