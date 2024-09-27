import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_IMAGE } from '../utils/constant'

const GptPage = () => {
  return (
    <div className=''>
        <img 
          src= {BACKGROUND_IMAGE} 
          alt="logo" 
          className='w-full -z-10 fixed h-[700px] object-cover'
        />
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptPage
