import React from "react";
import { useSelector } from "react-redux";
import useMoviesTrailer from "../../hooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  //fetch trailer and update store with video id

  const trailerVideo = useSelector((store) => store.movies?.nowPlayingTrailer);

  useMoviesTrailer(movieId);
  return (
    <div className="w-screen">
      {trailerVideo && (
        <iframe
          className="w-screen aspect-video "
          src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
