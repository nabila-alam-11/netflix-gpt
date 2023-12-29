import React, { useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constant";
import Signout from "./Signout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseDown = () => {
    setIsHovered(true);
  };

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black w-full">
      <div className="flex">
        <img
          className="lg:w-36 md:w-36 lg:ml-12 mr-4 z-10 lg:mt-2 relative"
          src={NETFLIX_LOGO}
          alt="logo"
        />
        {user && (
          <ul className="flex gap-4 py-2 mt-4 justify-center align-middle self-start text-white font-semibold z-10">
            <li>
              <a
                className="hover:text-gray-300 hover:transition-all"
                href="/home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-300 hover:transition-all"
                href="/tvnews"
              >
                TV Shows
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-300 hover:transition-all"
                href="/movies"
              >
                Movies
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-300 hover:transition-all"
                href="/new"
              >
                New & Popular
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-300 hover:transition-all"
                href="/list"
              >
                My List
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-300 hover:transition-all"
                href="/languages"
              >
                Browse by Languages
              </a>
            </li>
          </ul>
        )}
        {user && (
          <div className=" px-12 py-2 mt-3 z-10">
            <div
              className="flex justify-between flex-end ml-96 tracking-wider cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="w-8 h-8 rounded-md self-start"
                src={user?.photoURL}
                alt=""
              />
              <div className="relative transition-all duration-1000 h-4 inline-block z-10">
                <button className="cursor-pointer px-2 text-gray-200">
                  <FontAwesomeIcon icon={faCaretDown} />
                </button>
                {isHovered && <Signout />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
