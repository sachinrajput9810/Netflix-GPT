import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
import GptPage from "./GptPage"
import { useSelector } from 'react-redux'

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div className='relative'>
      <Header/>
      {
        showGptSearch ? <GptPage/> : (
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
        )
      }
      
     
      
    </div>
  )
}

export default Browse
