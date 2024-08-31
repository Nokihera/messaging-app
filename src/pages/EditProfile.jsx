import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [name, setName] = useState("user");
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState("user@gmail.com");
  const [emailClick, setEmailClick] = useState(false);
  const [password, setPassword] = useState("user@12345");
  const [passwordClick, setPasswordClick] = useState(false);
  const handlePasswordClick = () => {
    setPasswordClick(!passwordClick);
  };
  const handleEmailClick = () => {
    setEmailClick(!emailClick);
  };
  const handleOnClick = () => {
    const userName = document.querySelector("#userName");
    setClick(!click);
    if (click) {
      userName.innerHTML = name;
    }
    setName(userName.innerHTML);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div className="grid grid-flow-row grid-cols-2 justify-items-center place-items-center py-10 px-11 flex-grow-3">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-800 font-bold">User Name</h1>
          <div className="flex gap-3">
            <p
              className={`bg-slate-300 px-2 py-1 w-[250px] border-2 border-slate-300 ${
                click ? "hidden" : "block"
              }`}
              id="userName"
            >
              {name}
            </p>
            <input
              onChange={(e) => handleChangeName(e)}
              type="text"
              className={`${
                click ? "block" : "hidden"
              } bg-slate-300 px-2 py-1 w-[250px] outline-none`}
            />
            <button onClick={() => handleOnClick()}>
              {click ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <i className="fa-solid fa-pencil"></i>
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-800 font-bold">Email</h1>
          <div className="flex gap-3">
            <p
              className={`bg-slate-300 px-2 py-1 w-[250px] border-2 ${
                emailClick ? "hidden" : "block"
              }`}
            >
              {email}
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className={`${
                emailClick ? "block" : "hidden"
              } bg-slate-300 px-2 py-1 w-[250px] outline-none`}
            />
            <button onClick={() => handleEmailClick()}>
              {emailClick ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <i className="fa-solid fa-pencil"></i>
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-800 font-bold">Password</h1>
          <div className="flex gap-3">
            <p
              className={`bg-slate-300 px-2 py-1 w-[250px] border-2 ${
                passwordClick ? "hidden" : "block"
              }`}
            >
              {password}
            </p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className={`${
                passwordClick ? "block" : "hidden"
              } bg-slate-300 px-2 py-1 w-[250px] outline-none`}
            />
            <button onClick={() => handlePasswordClick()}>
              {passwordClick ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <i className="fa-solid fa-pencil"></i>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-[300px] gap-5"><Link to="/profile" className="bg-blue-500 text-white rounded-lg px-3 py-2">Back</Link><button className="bg-blue-500 text-white rounded-lg px-3 py-2">Save</button></div>
    </>
  );
};

export default EditProfile;
