import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackGround = ({ movieID }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movieID);
    
    return (
        <div className=' z-10 w-screen h-screen overflow-hidden bg-gradient-to-r from-black relative'>
            {/* Video Background */}
            <iframe
                className='absolute w-screen h-full top-0 left-0 transform scale-[500%]   md:scale-150 object-cover'
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&loop=1&playlist=${trailerVideo?.key}&controls=0&modestbranding=1&rel=0&mute=1&showinfo=0&iv_load_policy=3&disablekb=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                >
                
            </iframe>

        </div>
    );
};

export default VideoBackGround;
