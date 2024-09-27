import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <span className='v-30 absolute z-20  m-10 md:m-0 px-6 pl-5 pt-32  '>
            <h1 className='text-5xl text-white  px-1 font-bold '>{title} </h1>
            <p className='py-6 text-sm text-white px-2 md:w-1/4 w-full  '>{overview}</p>
            <div className='pl-2 '>
                <button className='border  bg-white  px-5 font-semibold hover:bg-opacity-50 rounded-lg   py-2 mr-2 border border-black'>▶️ Play </button>
                <button className='border bg-white  px-5  hover:bg-white rounded-lg font-semibold py-2 bg-opacity-50 border border-black'>💬 More Info</button>
            </div>
    </span>
  )
}

export default VideoTitle
