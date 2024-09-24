import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {

    if(!movies) return <div>No Movies found</div>
    return (
        <div className='p-2'>
            <h1 className='text-3xl font-semibold py-2 ml-3 text-white'>{title}</h1>
            <div className='flex overflow-scroll scrollbar-none '>
                <div className='flex '>
                    {movies.map(movie => <MovieCard key = {movie.id}  posterPath = {movie.poster_path}/> )}
                </div>
            </div>
        </div>
    )
}

export default MovieList
