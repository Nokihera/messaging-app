import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState, useCallback } from "react";
import { auth, db } from "../config/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const SentBox = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

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

  const messageSentHandle = useCallback(
    async (e) => {
      e.preventDefault();
      if (!message.trim()) return;

      try {
        if (user) {
          const messagePath = collection(db, "messages");
          await addDoc(messagePath, {
            text: message,
            uid: user.uid,
            timestamp: Timestamp.now(),
            username: user.displayName || "Anonymous",
          });
          setError(null);
        } else {
          setError("No user is logged in.");
        }
      } catch (e) {
        console.error("Error adding document: ", e);
        setError("Failed to send message. Please try again.");
      } finally {
        setMessage("");
      }
    },
    [message, user]
  );

  return (
    <>
      <form
        onSubmit={messageSentHandle}
        className=" bg-gray-200 py-4 fixed bottom-0 mx-auto w-full flex gap-4 justify-center px-7"
      >
        <input
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          className="bg-gray-300 rounded-full py-3 px-7 max-w-[450px] focus:border-blue-500 border-2 outline-none transition-all duration-300"
          placeholder="Message"
        />
        <button
          aria-label="Record"
          className="bg-blue-500 text-white md:rounded-full md:px-5 rounded-lg px-3"
        >
          <i className="fa-solid fa-microphone" aria-hidden="true"></i>
        </button>
        <button
          type="submit"
          aria-label="Send"
          className="bg-blue-500 text-white md:rounded-full md:px-5 rounded-lg px-3"
        >
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>
      </form>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </>
  );
};

export default SentBox;
