import React from 'react'
import { IMG_URL } from '../utils/constant'


const MovieCard = ({posterPath}) => {
    // console.log(posterPath)
    if(posterPath === null) return
    return (
        <div className='w-48 md:px-3    rounded-md transform transition  hover:scale-110 hover:rounded-lg '>
            <img  className='rounded-lg w-[70%]  md:w-full  hover:rounded-lg ease-in-out h-auto ' 
                  src={IMG_URL + posterPath} 
                  alt="Movie card"
             />
        </div>
    )
}

export default MovieCard
