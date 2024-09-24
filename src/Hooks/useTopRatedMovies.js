import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../Components/movieSlice"
import { API_OPTIONS } from "../utils/constant"


const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const getTopRatedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
      const json = await data.json()
      dispatch(addTopRatedMovies(json.results))
      // console.log(json.results)
    }
  
    useEffect( () => {
        getTopRatedMovies()
    })
}

export default useTopRatedMovies 