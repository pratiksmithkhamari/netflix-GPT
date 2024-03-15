import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage("");
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleValidation = () => {
    let message = null;
    if (isSignIn) {
      message = ValidateForm(email.current.value, password.current.value);

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Invalid email adress");
        });
    } else {
      message = ValidateForm(
        email.current.value,
        password.current.value,
        name.current.value
      );
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            userName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/D4D35AQH6JoyFN98zVw/profile-framedphoto-shrink_400_400/0/1693654381320?e=1711054800&v=beta&t=TMTl5kbXKbKc-JqCnVbOWLMVx_CRy3Oc06WHBBnjKYQ",
          })
            .then(() => {
              // Profile updated!

              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  userName:displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
          navigate("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessages = error.message;
          // ..
          setErrorMessage(`${errorCode}: ${errorMessages}`);
        });
    }

    console.log(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className="h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgmain"
        />
      </div>
      {/* div for login form */}

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col min-h-96 w-3/12 z-10 border-none rounded-lg absolute left-0 right-0 my-24 m-auto bg-black bg-opacity-80  p-8 "
      >
        <h1 className="text-3xl m-5 capitalize font-[600] text-white">
          {isSignIn ? "sign in" : "sign up"}
        </h1>
        <div className="flex justify-center items-center flex-col">
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              className="p-3 rounded-md bg-gray-500 text-xl m-5 w-[90%]"
              placeholder="Full Name"
            />
          )}
          <input
            type="text"
            ref={email}
            className="p-3 rounded-md bg-gray-500 text-xl m-5 w-[90%]"
            placeholder="Email or Phone number"
          />
          <input
            type="password"
            ref={password}
            className="w-[90%] p-3 m-5 text-xl rounded-md bg-gray-500"
            placeholder="Password"
          />
          <p className="text-red-700 font-bold text-lg">{errorMessage}</p>

          <button
            className="w-[90%] bg-red-800 m-5 p-3 text-white rounded-md"
            onClick={handleValidation}
          >
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
