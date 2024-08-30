import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuClick, setMenuClick] = useState(false);

  const handlerOnClick = () => {
    setMenuClick(!menuClick);
  };

  const navBtnList = [
    { name: "Profile", link: "/profile" },
    { name: "Logout", link: "/logout" },
    { name: "Setting", link: "/setting" },
    { name: "Help", link: "/help" },
  ];

  return (
    <>
      <nav className="px-7 py-3 shadow-lg">
        <div className=" flex justify-between items-center">
          <img src={logo} alt="Logo" className="md:h-14 h-11" />
          <button
            className="md:hidden rounded-lg px-3 bg-gray-600 py-1 "
            onClick={handlerOnClick}
          >
            {menuClick ? (
              <i className="fa-solid fa-xmark text-lg text-white transition-transform duration-300 ease-in-out"></i>
            ) : (
              <i className="fa-solid fa-bars text-lg text-white transition-transform duration-300 ease-in-out transform -rotate-180"></i>
            )}
          </button>

          <div className="md:flex hidden gap-4 items-center">
            {navBtnList.map((btn, index) => (
              <Link
                className="text-gray-700 text-lg border-b-4 hover:border-black border-white transition-all duration-300 font-bold hover:text-[20px]"
                key={index}
                to={btn.link}
              >
                {btn.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div
        className={`flex-col items-center gap-2 bg-slate-800 ${
          menuClick ? "flex" : "hidden"
        }`}
      >
        {navBtnList.map((btn, index) => (
          <Link
            key={index}
            className="w-full text-white py-2 hover:bg-blue-500 transition-all duration-300 text-center"
            to={btn.link}
          >
            {btn.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavBar;
