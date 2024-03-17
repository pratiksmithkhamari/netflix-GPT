import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useMoviesTrailer =(movieId)=>{
    const dispatch = useDispatch();
    const getMoviesVideos = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
          API_OPTIONS
        );  
        const json = await data.json();
        
        const filterTrailer = json?.results.filter(
          (result) => result.type == "Trailer"
        );
        const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
       
        dispatch(addTrailerVideo(trailer));
      };
      useEffect(() => {
        getMoviesVideos();
      }, []);
}

export default useMoviesTrailer