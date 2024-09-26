import React from 'react'
import lang from './languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey = useSelector(state => state.config.lang)
    return (
        <div className='pt-[10%]  flex justify-center'>
            <form action="" className=' bg-black w-1/2 grid grid-cols-12 '>
                <input type="text" 
                    className='p-2 m-3 rounded-md border  col-span-9 border-black' 
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button className='p-2 px-5 m-3  bg-red-600 col-span-3 text-white rounded-lg'>{lang[langKey].search}</button>

            </form>
        </div>
    )
}

export default GptSearchBar