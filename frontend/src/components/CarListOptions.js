import React from "react";
import { CarListData } from "../utils/CarListData";
import CarListItem from "./CarListItem";

export default function CarListOptions() {
  return (
    <div className="mt-5 p-5 overflow-auto h-[500px] ">
      <h2 className="text-[22px] font-bold "> Recommeded</h2>
      {CarListData.map((item) => (
        <div key={item.id}>
          <CarListItem car={item} />
        </div>
      ))}
    </div>
  );
}
