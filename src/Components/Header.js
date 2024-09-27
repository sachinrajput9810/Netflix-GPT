import React, { useEffect, useState } from 'react';
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { DUMMY_USER_ICON, NETFLIX_LOGO } from '../utils/constant';
import { addUser, removeUser } from './userSLice';
import { toggleGptSearchView } from './gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from './configSlice';

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
    }, [auth, dispatch, navigate]);


  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful
    }).catch((error) => {
      navigate("/error");
    });
  };

  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  const showLanguageSelect = useSelector(state => state.gpt.showGptSearch)

  return (
    <div className='absolute z-30 top-0 left-0 w-full bg-gradient-to-b from-black to-transparent  '>
      {/* Netflix logo section */}
      <div className="flex items-center justify-between px-2   flex-col  md:flex-row">
        <img
          src={NETFLIX_LOGO}
          alt="Netflix Logo"
          className='h-20 w-48  brightness-75 saturate-150'
        />

        {user && (
          
          <div className='flex items-center'>

            {showLanguageSelect && <select className='p-2 bg-black rounded-lg border border-white text-white mr-2'
                    onChange={handleLanguageChange}  >
                
                {SUPPORTED_LANGUAGES.map((lang,idx) => <option key={idx} value={lang.identifier}>{lang.name}</option>)}

            </select>}  

            <button className='text-white border border-white py-2 font-semibold px-3  mr-2 bg-purple-700 rounded-lg' 
                    onClick={handleGptSearchClick}  
            > {showLanguageSelect ? "Homepage" : "GPT Search"} </button>

            <img
              src={photoURL}
              alt="User-logo"
              className='w-12 border hidden md:block border-white h-12 rounded-sm '
            />
            <button
              className='font-bold text-sm border border-white  text-white ml-4 bg-red-600 px-4 py-2 md:py-2 opacity-100 rounded hover:bg-red-700 transition-all'
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
