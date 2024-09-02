import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, sendEmailVerification, updateEmail, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";


const EditProfile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [click, setClick] = useState(false);
  const [emailClick, setEmailClick] = useState(false);
  const [passwordClick, setPasswordClick] = useState(false);
  const auth = getAuth();
  const currentUser = auth.currentUser;
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
      if (user) {
        setName(user.displayName || "");
        setEmail(user.email || "");
      } 
    });
    return () => unsubscribe();
  }, []);

  const toggleEdit = (setter) => setter((prev) => !prev);

  const handleSaveChanges = () => {
    if (user) {
      updateProfile(currentUser, {
        displayName: name,
      }).then(() => {
        alert("Your Display Name is updated!")
      }).catch((error) => {
        console.log(error);
      });
      updateEmail(currentUser, email).then(()=>{
        // toggleEdit(setEmailClick);
      }).catch((error)=>{
        console.log(error);
      })
    }
  };
  const emailVerify = ()=>{
    sendEmailVerification(currentUser).then(()=>{
      alert("Email Verification Sent");
    })
  }

  return (
    <>
      <div className="grid grid-flow-row grid-cols-2 justify-items-start place-content-center py-10 px-11 flex-grow-3 gap-7">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-800 font-bold">Display Name</h1>
          <div className="flex gap-3">
            <p
              className={`bg-slate-300 px-2 py-1 w-[250px] border-2 ${click ? "hidden" : "block"}`}
              id="userName"
            >
              {name}
            </p>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className={`${click ? "block" : "hidden"} bg-slate-300 px-2 py-1 w-[250px] outline-none`}
            />
            <button onClick={() => toggleEdit(setClick)}>
              {click ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-pencil"></i>}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-800 font-bold">Email</h1>
          <div className="flex gap-3">
            <p
              className={`bg-slate-300 px-2 py-1 w-[250px] border-2 ${emailClick ? "hidden" : "block"}`}
            >
              {email}
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className={`${emailClick ? "block" : "hidden"} bg-slate-300 px-2 py-1 w-[250px] outline-none`}
            />
            <button onClick={() => toggleEdit(setEmailClick)}>
              {emailClick ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-pencil"></i>}
            </button>
          </div>
        </div>
        <div className="flex  gap-2 items-center">
            <button className="bg-blue-500 text-white rounded-lg px-3 py-2">Reset Password</button>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-blue-500 text-white rounded-lg px-3 py-2" onClick={()=>emailVerify()}>Verify Email</button>
        </div>
      </div>
      <div className="flex w-full justify-center mt-[300px] gap-5">
        <Link to="/profile" className="bg-blue-500 text-white rounded-lg px-3 py-2">
          Back
        </Link>
        <button className="bg-blue-500 text-white rounded-lg px-3 py-2" onClick={handleSaveChanges}>
          Save
        </button>
      </div>
    </>
  );
};

export default EditProfile;
