import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../Components/movieSlice"
import { API_OPTIONS } from "../utils/constant"


const useMovieTrailer = (movieID) => {
    
    const dispatch = useDispatch()
    const getMoviesVideo = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/957452/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]

        dispatch(addTrailerVideo(trailer))
        
    }

    useEffect(() => {
        getMoviesVideo()
    } , [])
    
}

export default useMovieTrailer