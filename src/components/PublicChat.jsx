import React from "react";
import useUserProfile from "../GlobalState/UseProfile";

const PublicChat = () => {
  const { profile } = useUserProfile();
  return (
    <>
      <div className="flex flex-col gap-5 flex-grow-3">
        {profile.map((pf) => (
          <>
            <div className="flex gap-3 items-center max-w-md bg-gray-300 rounded-e-full py-3 px-7 ">
              <img
                src={pf.profilePictureUrl}
                alt=""
                className="h-12 w-11 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <p className="font-bold text-gray-950">{pf.username}</p>
                <p>{pf.message}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="fixed bottom-3 mx-auto w-full flex gap-4 justify-center">
        <input
          type="text"
          className="bg-gray-300 rounded-full py-3 px-7 w-[450px] focus:border-blue-500 border-2 outline-none transition-all duration-300" placeholder="Message"
        />
        <button className="bg-blue-500 text-white rounded-full px-5">
          <i class="fa-solid fa-microphone"></i>
        </button>
        <button className="bg-blue-500 text-white rounded-full px-5">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

export default PublicChat;
