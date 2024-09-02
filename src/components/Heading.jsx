import React, { useState } from "react";
import { Link } from "react-router-dom";

const Heading = ({ chgPage, handler }) => {
  return (
    <div className="flex justify-between items-center px-7 py-4 sticky top-0 z-40 bg-white">
      <h1 className="text-xl text-gray-800 font-bold">{chgPage? "Private Chat":"Public Chat"}</h1>
      <button
        onClick={() => {
          handler();
        }}
        className=" bg-blue-500 text-white rounded-full px-3 py-2" 
      >
        {chgPage? 
        (<i className="fa-solid fa-user"></i>):
        (<i className="fa-solid fa-user-group"></i>)
        }
      </button>
    </div>
  );
};

export default Heading;
