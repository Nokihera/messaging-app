import React, { useEffect, useState, useRef } from "react";
import useUserProfile from "../GlobalState/UseProfile";
import SentBox from "./SentBox";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { auth, db } from "../config/firebase";

const PublicChat = () => {
  const { profile } = useUserProfile();
  const [messages, setMessages] = useState([]);
  const latestMessageRef = useRef(null); // Declare the ref here

  useEffect(() => {
    const qu = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(qu, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
    return () => unsubscribe();
  }, []);

  const currentUserUid = auth.currentUser.uid;

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <div className="w-full flex flex-col gap-5 overflow-y-auto pt-5 bg-slate-800 p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex relative ${
              message.uid === currentUserUid ? "justify-end" : "justify-start"
            }`}
          >
            <div
              ref={index === messages.length - 1 ? latestMessageRef : null}
              className={` relative flex gap-3 items-center max-w-md bg-gray-300  py-3 px-7 rounded-lg ${
                message.uid === currentUserUid
                  ? "bg-blue-500 text-black rounded-ee-none"
                  : "bg-white text-gray-900 rounded-bl-none"
              }`}
            >
              {" "}
              {message.uid === currentUserUid && (
                <div className=" absolute -right-4 border-b-8 border-s-8 border-t-8 border-e-transparent border-e-8 border-t-transparent border-gray-300  bottom-0 bg-transparent w-4 h-4 z-50"></div>
              )}{" "}
              {message.uid !== currentUserUid && (
                <div className="absolute -left-4 border-b-8 border-s-8 border-s-transparent border-t-8  border-e-8 border-t-transparent border-gray-300  bottom-0 bg-transparent w-4 h-4 z-50"></div>
              )}
              <div className="flex flex-col gap-1">
                <p className="font-bold">{message.username}</p>
                <p>{message.text}</p>
                <p className={`text-sm  ${message.uid !== currentUserUid && 'text-gray-500'}`}>
                  {message.timestamp?.toDate
                    ? new Date(message.timestamp.toDate()).toLocaleString()
                    : "No timestamp available"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" h-20"></div>
      <div className=" w-full bg-gray-600">
        <SentBox />
      </div>
    </>
  );
};

export default PublicChat;
