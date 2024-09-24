import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'

const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

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
