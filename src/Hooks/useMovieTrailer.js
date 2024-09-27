import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../Components/movieSlice"
import { API_OPTIONS } from "../utils/constant"
import { useSelector } from "react-redux"

const useMovieTrailer = (movieID) => {
    
    const dispatch = useDispatch()

    const trailerVideo = useSelector(store => store.movies.trailerVideo)


    const getMoviesVideo = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/957452/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]

        dispatch(addTrailerVideo(trailer))
        
    }

    useEffect(() => {
        !trailerVideo && getMoviesVideo()
    } , [])
    
}

export default useMovieTrailer