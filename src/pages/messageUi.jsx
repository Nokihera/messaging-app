import React from "react";
import UserProfile from "../GlobalState/UseProfile";
import Content from "../components/Content";
import NavBar from "../components/NavBar";

const MessageUI = () => {
  const { profile } = UserProfile();

  return (
    <div className="flex flex-col gap-3">
        <NavBar/>
      <div className="flex flex-col">
        {profile.map((pf, index) => (
          <Content key={index} pf={pf} />
        ))}
      </div>
    </div>
  );
};

export default MessageUI;
