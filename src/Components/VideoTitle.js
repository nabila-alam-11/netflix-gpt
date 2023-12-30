import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[12rem] px-16 leading-7  text-white absolute w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold w-2/4 leading-10 pb-3">{title}</h1>
      <h1 className="w-5/12 font-base mb-6">{overview}</h1>
      <div className="pb-4 text-sm font-semibold">
        <button className="mr-3 bg-white   px-6 pb-2 text-black text-center text-base rounded-md tracking-wide hover:bg-opacity-70">
          <FontAwesomeIcon
            className="text-3xl pr-2  relative top-1.5"
            icon={faCaretRight}
          />
          Play
        </button>
        <button className="bg-gray-600 text-white text-base px-6 pb-2 pt-1 tracking-wide rounded-md hover:bg-opacity-90">
          <FontAwesomeIcon
            className=" text-2xl pr-2 relative top-1"
            icon={faCircleInfo}
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
