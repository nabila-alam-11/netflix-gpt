import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const toggleButton = () => {
setSignInForm(!signInForm);
  }
  return (
    <div className='absolute'>
    <Header/>
    <div className=''>
    <img className="bg-gradient-to-b from-black" src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
    
    <form className="form w-4/12  bg-black relative right-0 left-0  mt-4 ml-auto mr-auto px-16 py-16 bg-opacity-80">
    <h1 className='text-white font-bold tracking-wide  text-3xl mb-4'>{signInForm ? "Sign In" : "Sign Up"}</h1>
    {!signInForm && <input type="text" placeholder='Full Name' className='mt-4 px-3 py-3 lg:w-80 outline-none rounded-md'></input>}
    <input type="email" placeholder='Email Address' className='mt-4 px-3 py-3 lg:w-80 outline-none rounded-md'></input>
    <input type="password" placeholder='Password' className='mt-4 px-3 py-3 lg:w-80 outline-none rounded-md'></input>
    <button className='bg-red-700  rounded-md lg:w-80   py-2.5 text-white font-semibold tracking-wider mt-8'>{signInForm ? "Sign In" : "Sign Up"}</button>
    <p className='text-white mt-12 tracking-wide cursor-pointer' onClick={toggleButton}>{signInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now" }</p>
    </form>
    </div>
    </div>
  )
}

export default Login