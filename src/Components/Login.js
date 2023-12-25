import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!signInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
updateProfile(user, {
  displayName: name.current.value, photoURL: "https://images.pexels.com/photos/2100553/pexels-photo-2100553.jpeg?auto=compress&cs=tinysrgb&w=600"
}).then(() => {
  // Profile updated!
  const { uid, email, displayName, photoURL } = auth.currentUser;
  dispatch(
    addUser({
      uid: uid,
      email: email,
      displayName: displayName,
      photoURL: photoURL,
    })
  );
  navigate("/browser");
}).catch((error) => {
  // An error occurred
});
    console.log(user);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage("User not found.");
  })

    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browser");


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage("User not found.");

  })
    }
  };
  const toggleButton = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div className="absolute">
      <Header />
      <div className="">
        <img
          className="bg-gradient-to-b from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="form w-4/12  bg-black relative right-0 left-0  mt-4 ml-auto mr-auto px-16 py-16 bg-opacity-80"
        >
          <h1 className="text-white font-bold tracking-wide  text-3xl mb-4">
            {signInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!signInForm && (
            <input
            ref={name}
              type="text"
              placeholder="Full Name"
              className="mt-4 px-3 py-3 lg:w-80 outline-none rounded-md"
            ></input>
          )}
          <input
            type="email"
            ref={email}
            placeholder="Email Address"
            className="mt-4 px-3 py-3 lg:w-80 outline-none rounded-md"
          ></input>

          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="mt-4 px-3 py-3 lg:w-80 outline-none rounded-md"
          ></input>
          <p className="text-red-500 font-semibold text-sm py-2">
            {errorMessage}
          </p>

          <button
            onClick={handleButtonClick}
            className="bg-red-700  rounded-md lg:w-80   py-2.5 text-white font-semibold tracking-wider mt-8"
          >
            {signInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white mt-12 tracking-wide cursor-pointer"
            onClick={toggleButton}
          >
            {signInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
