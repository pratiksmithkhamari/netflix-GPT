import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from '../utils/moviesSlice'
import { useEffect } from "react";

const usePopularMovies = ()=>{

    const dispatch = useDispatch()

    useEffect(() => {
      getTopRatedMovies();
    }, []);
  
    const getTopRatedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1',
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json?.results))
      
    };
}

export default usePopularMovies