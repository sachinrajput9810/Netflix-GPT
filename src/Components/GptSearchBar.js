import React, { useRef } from 'react'
import lang from './languageConstants'
import { useDispatch, useSelector } from 'react-redux'
// import client from '../utils/geminiAI' 
import { API_OPTIONS , GEMINIAI_KEY } from '../utils/constant'
import { addGptMovies } from './gptSlice';
const { GoogleGenerativeAI } = require("@google/generative-ai");



const GptSearchBar = () => {

    const langKey = useSelector(state => state.config.lang)
    const gptSearchText = useRef(null)
    const dispatch = useDispatch()


    const searchMovie = async (movie) => {
        const searchResult = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await searchResult.json()
        return json.results 
    }

    

    const handleGptSearchClick = async () => {
        try {
            const genAI = new GoogleGenerativeAI(GEMINIAI_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
            const gptQuery = "Explicitly give the array only . Act as the movie Recommendation system and suggest some good movies based upon this query: "
             + gptSearchText.current.value 
             + ".Only the top five movies in array form like [Vivah, Don, Gadar, Haunted, 1920 Evil Returns].";
    
            const result = await model.generateContent(gptQuery);
            const movieString = await result.response.text();  // Await the text
    
            // Log movieString for debugging
            // console.log("movieString:", movieString);
    
            // Parse movieString to array and handle errors
            const movieArray = JSON.parse(movieString);
    
            if (!Array.isArray(movieArray)) {
                console.error("Invalid movie array received:", movieArray);
                return;
            }
    
            // Map movie names to TMDB search results
            const data = movieArray.map(movie => searchMovie(movie));
            const tmdbResults = await Promise.all(data);
    
            // Dispatch the result to Redux
            dispatch(addGptMovies({ movieNames: movieArray, movieResults: tmdbResults }));
    
            // console.log("TMDB Results:", tmdbResults);
        } catch (error) {
            console.error("Error fetching GPT results or parsing response:", error);
        }
    };
    
    

    
    return (
        <div className='pt-[55%] md:pt-[10%] flex justify-center'>
            <form action="" className=' bg-black w-full  md:w-1/2 grid grid-cols-12 ' onSubmit={ (e) => {e.preventDefault()}}>
                <input 
                    ref = {gptSearchText}
                    type="text" 
                    className='py-2 px-1 m-2 md:m-3 rounded-md border  col-span-9 border-black' 
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button className='p-1 md:p-2 px-1  md:px-5 m-3  bg-red-600 col-span-3 hover:bg-red-700  text-white rounded-lg' 
                        onClick={handleGptSearchClick}
                 >{lang[langKey].search}</button>

            </form>
        </div>
    )
}

export default GptSearchBar