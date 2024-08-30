import React, { useState } from "react";
import { Link } from "react-router-dom";

const Heading = ({ chgPage, handler }) => {
  return (
    <div className="flex justify-between items-center px-7 mt-4">
      <h1 className="text-xl text-gray-800 font-bold">Recent</h1>
      <Link
        onClick={() => {
          handler();
        }}
        className=" bg-blue-500 text-white rounded-full px-3 py-2" to={``}
      >
        {chgPage? 
        (<i class="fa-solid fa-user"></i>):
        (<i class="fa-solid fa-user-group"></i>)
        }
      </Link>
    </div>
  );
};

export default Heading;
