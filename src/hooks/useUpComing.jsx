import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies, addUpComingMovies} from '../utils/moviesSlice'
import { useEffect } from "react";

const useUpComing = ()=>{

    const dispatch = useDispatch()

    useEffect(() => {
      getUpComingMovies();
    }, []);
  
    const getUpComingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1',
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addUpComingMovies(json?.results))
      
    };
}

export default useUpComing;