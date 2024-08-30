import React, { useEffect, useState } from "react";
import UserProfile from "../GlobalState/UseProfile";
import Content from "../components/Content";
import NavBar from "../components/NavBar";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";
import Heading from "../components/Heading";
import PublicChat from "../components/PublicChat";

const MessageUI = () => {
  const { profile } = UserProfile();
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const usersCollectionRef = collection(db, "users");
  //       const usersSnapshot = await getDocs(usersCollectionRef);
  //       const usersList = usersSnapshot.docs.map((doc) => doc.data());
  //       console.log("Fetched users:", usersList);
  //     } catch (error) {
  //       console.error("Error fetching users:", error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  console.log(auth);
  useEffect(() => {
    if (auth) {
      setCurrentUser(auth.currentUser);
    }
  }, [auth]);
  const [chgPage, setChgPage] = useState(true);
  const handlerChgPage = ()=> {
    setChgPage(!chgPage);
  }

  return (
    <div className="flex flex-col">
      <NavBar />
      {currentUser && <div>This is {currentUser.displayName}</div>}
      <Heading chgPage = {chgPage} handler={handlerChgPage}/>
      {chgPage? (<div className="flex flex-col">
        {profile.map((pf, index) => (
          <Content key={index} pf={pf} />
        ))}
      </div>): (<PublicChat/>)}
    </div>
  );
};

export default MessageUI;
