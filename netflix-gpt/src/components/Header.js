import React, { useEffect } from "react";
import logo from "../Images/Logonetflix.png";
// import userlogo from "../Images/Netflix-avatar.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGAUGE } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-6  bg-gradient-to-b from-black z-30  w-full flex justify-between">
      <img className="w-[7.5rem]" src={logo} alt="logo" />

      {user && (
        <div className="flex  p-2 ">
          {showGptSearch && (
            <select
              className="px-2 m-2 text-center rounded-sm  bg-gray-290"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGAUGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" py-2 px-4 my-2 mx-4 bg-red-700 text-white rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
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
