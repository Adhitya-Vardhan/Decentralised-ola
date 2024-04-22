import { ConnectButton } from "web3uikit";
import { Link } from "react-router-dom";

import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between p-3 px-5 border-b-[1px] shadow-sm ">
      {" "}
      <div className="flex gap-10  items-center ">
        <img src="./logo2.png" alt="logo" width={50} height={50} />
        <div className="flex gap-6">
          <Link
            to="/"
            className=" hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all "
          >
            Home
          </Link>
          <Link
            to="/rider"
            className=" hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all "
          >
            Rider
          </Link>
          <Link
            to="/drive"
            className=" hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all "
          >
            Driver
          </Link>

          <h2>
            {" "}
            <ConnectButton />{" "}
          </h2>
        </div>
      </div>{" "}
    </div>
  );
}
