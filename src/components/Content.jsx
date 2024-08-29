import React from "react";

const Content = ({ pf }) => {
  return (
    <div
      className="flex gap-3 items-center border-b-2 border-gray-500 py-4 px-6"
    >
      <img
        src={pf.profilePictureUrl}
        alt=""
        className="h-12 w-11 rounded-full object-cover"
      />
      <div>
        <p className="font-bold">{pf.username}</p>
        <p className="text-sm text-gray-500">{pf.bio}</p>
      </div>
    </div>
  );
};

export default Content;
