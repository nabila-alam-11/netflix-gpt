import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';

const Signout = () => {
    const userName = useSelector((store) => store.user.displayName);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error");
        })
    }
  return (
    <div className='absolute -top-0 mt-4 right-4  text-white font-light py-4 text-sm w-40 rounded-xs' >
    <ul >
    <li className='py-1 px-3 bg-transparent'></li>

    <li className="py-1 px-3 cursor-pointer bg-gray-950 border-t border-gray-600">&#128100; &nbsp;{userName}</li>
    <li className='py-1 px-3 cursor-pointer bg-gray-950'>🖊️ Manage Profiles</li>
    <li className='py-1 px-3 cursor-pointer bg-gray-950'>👤 Account</li>
    <li className='py-1 px-3 pb-2 cursor-pointer bg-gray-950'>⍰&nbsp; Help Center</li>
    <li className='border-gray-600 border px-0 '></li>
    <li onClick={handleSignOut} className='py-2 px-3 cursor-pointer bg-gray-950 border-b border-gray-600 hover:underline'>Sign Out of Netflix</li>
    </ul>
    </div>
  )
}
export default Signout;
