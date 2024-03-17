import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const userStore = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
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
    return () => unsuscribe();
  }, []);
  return (
    <div className="absolute flex justify-between w-full z-50 bg-gradient-to-b items-center p-3 from-black">
      <img className="w-44 " src={LOGO} alt="logo" />
      {userStore && (
        <div className=" flex items-center justify-center font-bold gap-2">
          <img
            className="h-12 w-12 rounded-md"
            src={userStore?.photoURL}
            alt=""
          />
          <button
            className="bg-red-800 rounded-lg  p-2 text-xl h-10 text-white"
            onClick={handleSignOut}
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
