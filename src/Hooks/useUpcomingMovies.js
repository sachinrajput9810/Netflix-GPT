import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../Components/movieSlice"
import { API_OPTIONS } from "../utils/constant"
import { useSelector } from "react-redux"

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies)


    const getUpcomingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      const json = await data.json()
      dispatch(addUpcomingMovies(json.results))
      // console.log(json.results)
    }
  
    useEffect( () => {
      !upcomingMovies && getUpcomingMovies()
    })
}

export default useUpcomingMovies 