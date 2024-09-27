import React, { useRef, useState } from 'react';
import Header from './Header';
import {validateForm} from "../utils/validate"
import {createUserWithEmailAndPassword  , signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase"
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from './userSLice';
import { BACKGROUND_IMAGE, DUMMY_USER_ICON } from '../utils/constant';

const Login = () => {

  const name = useRef(null)
  const email = useRef(null) 
  const password = useRef(null)

  const dispatch = useDispatch()


  const [errorMessage , setErrorMessage] = useState(null)

  const [isSignInForm , setIsSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
  }

  const handleSignInClick = () => {
    const nameValue = isSignInForm ? null : name.current.value 
    const message = validateForm(nameValue , email.current.value , password.current.value , isSignInForm)
    setErrorMessage(message)

    if(message) return  
    
    // Simulate authentication here
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: {DUMMY_USER_ICON}
          })
          .then(() => {
            console.log("Profile updated");
            const { uid, email, displayName, photoURL } = auth.currentUser
            dispatch(addUser({ uid, email, displayName, photoURL }));
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          setErrorMessage("Email Already Used"); 
        });

    }
    

    else{ 
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("User Not Found")
          });

    }

    
  }

  return (
    <div className=' h-screen w-full '>
      <div className='absolute inset-0'>
        <img 
          src= {BACKGROUND_IMAGE} 
          alt="logo" 
          className='w-full h-full fixed object-cover'
        />
      </div>

      <div className='fixed  inset-0 bg-black opacity-60'></div>

      <Header />

      <form onSubmit={handleFormSubmit} className='relative z-20 bg-black/70 text-white rounded-md p-9 w-full md:w-1/3 mx-auto top-20'>
        <h1 className='font-bold p-2 text-[30px]'>{isSignInForm ? "Sign In" : "Sign Up"} </h1>

        {!isSignInForm &&  (<input 
          ref={name}
          type="text" 
          placeholder='Full Name' 
          className='p-3 pl-4  w-full text-black border  border-white bg-gray-200 m-3  rounded-sm' 
        />)}

        <input 
          ref = {email}
          type="text" 
          placeholder='Email or phone number' 
          className='p-3 pl-4  w-full  border text-black border-white bg-gray-200 m-3  rounded-sm' 
        />

        <input 
        ref = {password}
        type="password" 
        placeholder='Password' 
        className='p-3 m-3 rounded-sm border text-black border-white pl-4 w-full bg-gray-200' 
        />

        <div className='h-6 '>
           <p className='ml-4 text-red-600'>{errorMessage}</p>
        </div>

        <button 
          type="submit" 
          className='p-2 m-3 mt-10 bg-red-700 hover:bg-red-900 brightness-75 saturate-200 w-full font-semibold rounded-sm'
          onClick={handleSignInClick}
          >
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
