import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  return (
    <div className='  bg-black'>
        <div className='-mt-40 pl-2 z-50 relative'>
          <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies} />
          <MovieList title = {"Top Rated"} movies = {movies.topRatedMovies} />
          <MovieList title = {"Popular"} movies = {movies.popularMovies} />
          <MovieList title = {"Upcoming"} movies = {movies.upcomingMovies} />
        </div>
    </div>
  )
}

export default SecondaryContainer
