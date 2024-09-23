import React, { useEffect, useState } from 'react';
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { DUMMY_USER_ICON, NETFLIX_LOGO } from '../utils/constant';
import { addUser, removeUser } from './userSLice';

const Header = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const [photoURL, setPhotoURL] = useState(DUMMY_USER_ICON);

  useEffect(() => {
    if (user && user.photoURL) {
      setPhotoURL(user.photoURL);
    } else {
      setPhotoURL(DUMMY_USER_ICON);
    }
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); 
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {}).catch((error) => {
      navigate("/error");
    });
  };

  return (
    <div className='  top-0 left-0 w-full bg-slate-500 bg-gradient-to-b from-black to-transparent '>
      {/* Netflix logo section */}
      <div className="flex items-center justify-between px-8">
        <img
          src={NETFLIX_LOGO}
          alt="Netflix Logo"
          className='h-20 w-48 brightness-75 saturate-150'
        />

        {user && (
          <div className='flex items-center'>
            <img
              src={photoURL}
              alt="User-logo"
              className='w-12 h-12 rounded-sm '
            />
            <button
              className='font-bold text-sm text-white ml-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-all'
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
