import React, { useEffect, useState } from 'react';
import { signOut } from "firebase/auth";
import { getAuth } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { DUMMY_USER_ICON } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user); // Access the user state from Redux

  const [photoURL, setPhotoURL] = useState(DUMMY_USER_ICON);

  useEffect(() => {
    if (user && user.photoURL) {
      setPhotoURL(user.photoURL);
    } else {
      setPhotoURL(DUMMY_USER_ICON);
    }
  }, [user]);
  

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/"); // Navigate to the homepage on sign-out
    }).catch((error) => {
      navigate("/error"); // Navigate to an error page if sign-out fails
    });
  };

  return (
    <div className='relative flex justify-between'>
      {/* Netflix logo section */}
      <div className='absolute top-0 bg-gradient-to-b from-black left-0 right-0 z-10'>
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
          className='h-20 w-48 m-2 ml-32 brightness-75 saturate-150'
        />
      </div>

      {user &&  <div className='flex ml-auto p-2 z-20 relative'>
            <img
            src={photoURL} // Use a fallback image if photoURL is not available
            alt="User-logo"
            className='w-12 h-12 rounded-full border-2 border-white'
            />

              <button
              className='font-bold text-sm text-white mt-2  ml-4 h-8 pb-2
               bg-red-600 px-2 py-1 rounded hover:bg-red-700 transition-all z-30'
              onClick={handleSignOut}
              >
              Sign Out
           </button>
          

      </div> 
      }

    </div>
  );
};

export default Header;
