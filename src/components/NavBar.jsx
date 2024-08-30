import React, { useState } from "react";
import logo from "../assets/logo.png";
const NavBar = () => {
  const [menuClick, setMenuClick] = useState(false);
  const handlerOnClick = () => {
    setMenuClick(!menuClick);
  };
  return (
    <>
      <nav className="px-7 py-3 shadow-lg">
        <div className="flex justify-between items-center">
          <img src={logo} alt="" className="md:h-14 h-11" />
          <button
            className="md:hidden rounded-lg px-3 bg-gray-600 py-1 "
            onClick={() => handlerOnClick()}
          >
            {menuClick? (
              <i className="fa-solid fa-xmark text-lg text-white transition-transform duration-300 ease-in-out"></i>
            ):
            (
              <i className="fa-solid fa-bars text-lg text-white transition-transform duration-300 ease-in-out transform -rotate-180"></i>
            )}
          </button>

          <div className="md:flex hidden gap-4 items-center">
            <button className="text-gray-700 text-lg border-b-4 hover:border-black border-white transition-all duration-300 font-bold hover:text-[20px]">
              Profile
            </button>
            <button className="text-gray-700 text-lg border-b-4 hover:border-black border-white transition-all duration-300 font-bold hover:text-[20px]">
              Logout
            </button>
            <button className="text-gray-700 text-lg border-b-4 hover:border-black border-white transition-all duration-300 font-bold hover:text-[20px]">
            Setting
            </button>
            <button className="text-gray-700 text-lg border-b-4 hover:border-black border-white transition-all duration-300 font-bold hover:text-[20px]">
              Help
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`flex-col items-center gap-2 bg-slate-800 ${
          menuClick ? "flex" : "hidden"
        }`}
      >
        <button className="w-full text-white py-2 hover:bg-blue-500">Profile</button>
        <button className="w-full text-white py-2 hover:bg-blue-500">Logout</button>
        <button className="w-full text-white py-2 hover:bg-blue-500">Setting</button>
        <button className="w-full text-white py-2 hover:bg-blue-500">Help</button>
      </div>
    </>
  );
};

export default NavBar;
