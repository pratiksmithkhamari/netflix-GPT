import React from "react";
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[23%] pl-24 aspect-video absolute bg-gradient-to-r from-black w-full text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-xl w-2/4 mt-3">{overview}</p>
      <div className="flex gap-4 mt-4">
        <button className="py-3 px-6 text-black text-xl bg-white hover:bg-opacity-75 rounded-lg flex items-center">
          <FaPlay />
          Play
        </button>
        <button className="py-3 px-6 text-white text-xl bg-gray-700 bg-opacity-70 hover:bg-opacity-80  rounded-lg flex items-center gap-1">
          <ImInfo />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
