import React from 'react';

const Header = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 bg-black/40 z-10'></div>
      <div className='absolute top-0 left-0 right-0 z-20'>
        <img 
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
          alt="Netflix Logo" 
          className='h-20 w-48 m-2 ml-32 brightness-75 saturate-150' 
        />
      </div>
    </div>
  );
}

export default Header;
