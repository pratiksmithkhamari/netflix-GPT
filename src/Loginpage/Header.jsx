import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

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
  return (
    <div className="absolute flex justify-between w-full z-50 bg-gradient-to-b items-center p-3 from-black">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {userStore && 
        <div className=" flex items-center justify-center font-bold gap-2">
          <img
            className="h-12 w-12 rounded-full"
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
      }
    </div>
  );
};

export default Header;
