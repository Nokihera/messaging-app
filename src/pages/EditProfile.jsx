import React, { useState } from "react";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [click, setClick] = useState(false);
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
    <div className="grid grid-flow-row grid-cols-2 justify-items-center place-items-center py-10 px-11">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg text-gray-800 font-bold">User Name</h1>
        <div className="flex gap-3">
          <p
            className={`bg-slate-300 px-2 py-1 w-[250px] border-2 border-slate-300 ${
              click ? "hidden" : "block"
            }`}
            id="userName"
          >
            User
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
        <p className={`bg-slate-300 px-2 py-1 w-[250px] border-2`}>user@gmail.com</p>
      </div>
    </div>
  );
};

export default EditProfile;
