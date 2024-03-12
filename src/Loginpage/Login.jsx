import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgmain"
        />
      </div>
      {/* div for login form */}

      <form className="flex flex-col min-h-96 w-4/12 z-10 border-none rounded-lg absolute left-0 right-0 my-24 m-auto bg-black bg-opacity-80  p-8 ">
        <h1 className="text-3xl m-5 capitalize font-[600] text-white">
          {isSignIn ? "sign in" : "sign up"}
        </h1>
        <div className="flex justify-center items-center flex-col">
        {!isSignIn && <input
            type="text"
            className="p-3 rounded-md bg-gray-500 text-xl m-5 w-[90%]"
            placeholder="Full Name"
          />}
          <input
            type="text"
            className="p-3 rounded-md bg-gray-500 text-xl m-5 w-[90%]"
            placeholder="Email or Phone number"
          />
          <input
            type="password"
            className="w-[90%] p-3 m-5 text-xl rounded-md bg-gray-500"
            placeholder="Password"
          />
          <button className="w-[90%] bg-red-800 m-5 p-3 text-white rounded-md">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="text-white">
            <input type="checkbox" name="rememberme" id="" />
            <label htmlFor="checkbox">Remember me</label>
            <a href="">Need help?</a>
          </div>
          <p className="my-4 text-white cursor-pointer" onClick={handleSignIn}>
            {isSignIn
              ? "New to Netflix? Sign up now."
              : "Already registered?Sign In Now"}
          </p>
          <p className="text-white m-5">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
