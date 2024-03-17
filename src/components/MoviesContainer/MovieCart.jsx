import React from "react";
import { IMG_CDN_URL } from "../../utils/constants";

const MovieCart = ({ posterPath }) => {
  return (
    <div className="w-36  pr-2">
      <img src={IMG_CDN_URL + posterPath} alt="" />
    </div>
  );
};

export default MovieCart;
