import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies} from '../utils/moviesSlice'
import { useEffect } from "react";

const useTopRated = ()=>{

    const dispatch = useDispatch()

    useEffect(() => {
      getTopRatedMovies();
    }, []);
  
    const getTopRatedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1',
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json?.results))
      
    };
}

export default useTopRated