import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {

    const {movieNames , movieResults} = useSelector(store => store.gpt) 
    if(!movieNames) return null;
    return (
        <div className='p-1 md:m-3 text-white bg-black bg-opacity-80'>
            <div>
                {movieNames.map( (movieName , idx) =>  (
                    <MovieList key = {idx} title={movieName} movies={movieResults[idx]}  />
                ))}
            </div>
        </div>
    )
}

export default GptMovieSuggestion
