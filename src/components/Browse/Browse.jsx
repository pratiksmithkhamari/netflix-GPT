import Header from "../../Loginpage/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRated from "../../hooks/useTopRated";
import useUpComing from "../../hooks/useUpComing";
import MainContainer from "../MoviesContainer/MainContainer";
import SecondaryContainer from "../MoviesContainer/SecondaryContainer";
const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies()
  useTopRated();
  useUpComing();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      -mainconainer
          -videobackGround
          -videotitle
       -secondarycontainer
          -movie list
          -card
          
       */}
    </div>
  );
};

export default Browse;
