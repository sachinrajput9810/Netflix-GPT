import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../Components/movieSlice"
import { API_OPTIONS } from "../utils/constant"


const useMovieTrailer = (movieID) => {
    
    // console.log(movieID)
    const dispatch = useDispatch()
    // fetching the api and getting the trailer video
    const getMoviesVideo = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/957452/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        // console.log(json)
        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        // console.log(trailer)

        dispatch(addTrailerVideo(trailer))
        
    }

    useEffect(() => {
        getMoviesVideo()
    } , [])
    
}

export default useMovieTrailer