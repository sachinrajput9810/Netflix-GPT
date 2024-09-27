import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../Components/movieSlice"
import { API_OPTIONS } from "../utils/constant"


const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const json = await data.json()
      dispatch(addNowPlayingMovies(json.results))
      // console.log(json.results)
    }
  
    useEffect( () => {
      !nowPlayingMovies && getNowPlayingMovies()
    })
}

export default useNowPlayingMovies 