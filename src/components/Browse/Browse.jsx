import Header from "../../Loginpage/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "../MoviesContainer/MainContainer";
import SecondaryContainer from "../MoviesContainer/SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();

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
