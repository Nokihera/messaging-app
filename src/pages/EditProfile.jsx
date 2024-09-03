import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  updateEmail,
  updateProfile,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { auth } from "../config/firebase";

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const authentication = getAuth();
  const currentUser = authentication.currentUser;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      setUser(user || null);
      if (user) {
        setName(user.displayName || "");
        setEmail(user.email || "");
      }
    });
    return () => unsubscribe();
  }, [authentication]);

  const toggleEdit = (setter) => setter((prev) => !prev);

  const handleSaveChanges = async () => {
    if (!user) {
      setError("No user is currently logged in.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Update Display Name if changed
      if (name !== user.displayName) {
        await updateProfile(user, { displayName: name });
        alert("Your Display Name has been updated!");
      }

      // Update Email if changed
      if (email !== user.email) {
        if (!currentPassword) {
          setError("Please enter your current password to update your email.");
          setIsLoading(false);
          return;
        }

        // Reauthenticate the user
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(user, credential);

        // Update Email
        await updateEmail(user, email);
        alert("Your Email has been updated!");

        // Optionally, send email verification
        await sendEmailVerification(user);
        alert("A verification email has been sent to your new email address.");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
      setCurrentPassword("");
      setIsEditingName(false);
      setIsEditingEmail(false);
    }
  };

  const emailVerify = async () => {
    if (!user) {
      alert("No user is currently logged in.");
      return;
    }

    try {
      await sendEmailVerification(user);
      alert("Email Verification Sent");
    } catch (err) {
      console.error("Error sending email verification:", err);
      alert("Failed to send email verification. Please try again.");
    }
  };

  return (
    <>
      <div className="grid grid-flow-row grid-cols-2 justify-items-start place-content-center py-10 px-11 flex-grow-3 gap-7">
        {/* Display Name Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-800 font-bold">Display Name</h1>
          <div className="flex gap-3 items-center">
            {!isEditingName ? (
              <>
                <p className="bg-slate-300 px-2 py-1 w-[250px] border-2">{name}</p>
                <button onClick={() => toggleEdit(setIsEditingName)}>
                  <i className="fa-solid fa-pencil"></i>
                </button>
              </>
            ) : (
              <>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="bg-slate-300 px-2 py-1 w-[250px] outline-none"
                />
                <button onClick={() => toggleEdit(setIsEditingName)}>
                  <i className="fa-solid fa-check"></i>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Email Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-800 font-bold">Email</h1>
          <div className="flex gap-3 items-center">
            {!isEditingEmail ? (
              <>
                <p className="bg-slate-300 px-2 py-1 w-[250px] border-2">{email}</p>
                <button onClick={() => toggleEdit(setIsEditingEmail)}>
                  <i className="fa-solid fa-pencil"></i>
                </button>
              </>
            ) : (
              <>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="bg-slate-300 px-2 py-1 w-[250px] outline-none"
                />
                <button onClick={() => toggleEdit(setIsEditingEmail)}>
                  <i className="fa-solid fa-check"></i>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Current Password Section (Visible Only When Editing Email) */}
        {isEditingEmail && (
          <div className="flex flex-col gap-2 col-span-2">
            <h1 className="text-lg text-gray-800 font-bold">Current Password</h1>
            <input
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              type="password"
              placeholder="Enter your current password"
              className="bg-slate-300 px-2 py-1 w-[250px] outline-none"
            />
          </div>
        )}

        {/* Reset Password Button */}
        <div className="flex gap-2 items-center">
          <Link
            to="/reset-password"
            className="bg-blue-500 text-white rounded-lg px-3 py-2"
          >
            Reset Password
          </Link>
        </div>

        {/* Verify Email Button */}
        <div className="flex items-center gap-2">
          <button
            className="bg-blue-500 text-white rounded-lg px-3 py-2"
            onClick={emailVerify}
          >
            Verify Email
          </button>
        </div>
      </div>

      {/* Display Error Message */}
      {error && (
        <div className="flex justify-center mt-4">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {/* Save and Back Buttons */}
      <div className="flex w-full justify-center mt-5 gap-5">
        <Link
          to="/profile"
          className="bg-blue-500 text-white rounded-lg px-3 py-2"
        >
          Back
        </Link>
        <button
          className={`bg-blue-500 text-white rounded-lg px-3 py-2 ${isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          onClick={handleSaveChanges}
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </>
  );
};

export default EditProfile;
