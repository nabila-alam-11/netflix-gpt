import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Browser = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {

signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className='flex justify-between px-12 py-2'>
    <img className="w-36" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
    <div className='flex justify-between ml-2'>
    <img className="w-8 h-8" src={user?.photoURL} alt="" />
    <button onClick={handleSignOut} className='cursor-pointer'>Sign Out</button>
    </div>
    </div>
  )
}

export default Browser