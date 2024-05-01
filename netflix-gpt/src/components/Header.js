import React from "react";
import logo from "../Images/Logonetflix.png";
import userlogo from "../Images/Netflix-avatar.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignin = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute px-8 py-6 bg-gradient-to-b from-black z-30  w-full flex justify-between">
      <img className="w-44" src={logo} alt="logo" />
      {user && (
        <div className="flex p-2 ">
          <img className="w-12 h-12 " src={user?.photoURL} alt="userlogo" />

          <button onClick={handleSignin} className="font-bold text-white">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
