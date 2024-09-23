import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {

  useNowPlayingMovies()


  return (
    <div className='relative'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
       - Main Container
         - Video bg
         - video title
         - video description
      - Secondary Container
         - MovieList * n 
           - Movie Card * n
      
       */}
      
    </div>
  )
}

export default Browse
