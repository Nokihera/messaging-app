import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "../store/firebase";
// import { addDoc, collection, Timestamp } from "firebase/firestore";

const SentBox = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const messageSentHandle = async (e) => {
    e.preventDefault();

    if (!message.trim()) return; // Avoid sending empty messages

    try {
      const messagePath = collection(db, "messages");
      await addDoc(messagePath, {
        text: message,
        uid: user.uid,
        timestamp: Timestamp.now(),
        username: user.displayName || "Anonymous",
      });
    } catch (e) {
      console.log(e.message);
    } finally {
      setMessage("");
    }
  };

  return (
    <>
      <form  onSubmit={messageSentHandle}  className="fixed bottom-3 mx-auto w-full flex gap-4 justify-center px-7">
        <input
         name="message"
         value={message}
         onChange={(e) => setMessage(e.target.value)}
          type="text"
          className="bg-gray-300 rounded-full py-3 px-7 max-w-[450px] focus:border-blue-500 border-2 outline-none transition-all duration-300"
          placeholder="Message"
        />
        <button className="bg-blue-500 text-white md:rounded-full md:px-5 rounded-lg px-3">
          <i class="fa-solid fa-microphone"></i>
        </button>
        <button type="submit" className="bg-blue-500 text-white md:rounded-full md:px-5 rounded-lg px-3">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </form>
    </>
  );
};

export default SentBox;
