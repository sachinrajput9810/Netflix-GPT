import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const [isSignInForm , setIsSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className='relative h-screen w-full '>
      <div className='absolute inset-0'>
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg" 
          alt="logo" 
          className='w-full h-full object-cover'
        />
      </div>

      <div className='absolute inset-0 bg-black opacity-60'></div>

      <Header />

      <form onSubmit={handleFormSubmit} className='relative z-20 bg-black/70 text-white rounded-md p-9 w-1/3 mx-auto top-20'>
        <h1 className='font-bold p-2 text-[30px]'>{isSignInForm ? "Sign In" : "Sign Up"} </h1>

        {!isSignInForm &&  (<input 
          type="text" 
          placeholder='Full Name' 
          className='p-3 pl-4  w-full text-black border  border-white bg-gray-200 m-3  rounded-sm' 
        />)}

          <input 
          type="text" 
          placeholder='Email or phone number' 
          className='p-3 pl-4  w-full  border text-black border-white bg-gray-200 m-3  rounded-sm' 
        />

        <input 
          type="password" 
          placeholder='Password' 
          className='p-3 m-3 rounded-sm border text-black border-white pl-4 w-full bg-gray-200' 
        />
        <button 
          type="submit" 
          className='p-2 m-3 mt-10 bg-red-700 brightness-75 saturate-200 w-full font-semibold rounded-sm'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className='mt-10 ml-4 cursor-pointer' 
           onClick={toggleSignInForm} >
           {isSignInForm ? "New to Netflix ?   Sign Up Now" : "Already Registered ? Sign In Now"}  
        </p>

      </form>
    </div>
  );
}

export default Login;
