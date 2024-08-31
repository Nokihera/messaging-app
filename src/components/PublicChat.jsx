import React, { useEffect, useState } from "react";
import useUserProfile from "../GlobalState/UseProfile";
import SentBox from "./SentBox";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase";

const PublicChat = () => {
  const { profile } = useUserProfile();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const qu = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(qu, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-5 overflow-scroll mt-5">
        {messages.map((message, index) => (
          <div
            key={index}
            className="flex gap-3 items-center md:max-w-md bg-gray-300 rounded-e-full py-3 px-7 max-w-80"
          >
            {/* <img
                src={pf.profilePictureUrl}
                alt=""
                className="h-12 w-11 rounded-full object-cover"
              /> */}
            <div className="flex flex-col">
              <p className="font-bold text-gray-950">{message.username}</p>
              <p>{message.text}</p>
              <p>
                {" "}
                {message.timestamp?.toDate
                  ? new Date(message.timestamp.toDate()).toLocaleString()
                  : "No timestamp available"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <SentBox />
      {/* <div className="fixed bottom-3 mx-auto w-full flex gap-4 justify-center px-7">
        <input
          type="text"
          className="bg-gray-300 rounded-full py-3 px-7 max-w-[450px] focus:border-blue-500 border-2 outline-none transition-all duration-300" placeholder="Message"
        />
        <button className="bg-blue-500 text-white md:rounded-full md:px-5 rounded-lg px-3">
          <i class="fa-solid fa-microphone"></i>
        </button>
        <button className="bg-blue-500 text-white md:rounded-full md:px-5 rounded-lg px-3">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div> */}
    </>
  );
};

export default PublicChat;
