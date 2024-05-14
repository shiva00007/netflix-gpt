import React, { useEffect } from "react";
import logo from "../Images/Logonetflix.png";
// import userlogo from "../Images/Netflix-avatar.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //when the componenent was unmount
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute px-8 py-6  bg-gradient-to-b from-black z-30  w-full flex justify-between">
      <img className="w-[7.5rem]" src={logo} alt="logo" />
      {user && (
        <div className="flex p-2 ">
          {/* <img className="" src={user?.photoURL} alt="userlogo" /> */}

          <button onClick={handleSignout} className="font-bold text-white">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
