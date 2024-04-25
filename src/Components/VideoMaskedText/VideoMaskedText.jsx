import React from "react";
// import "../assets/VideoMaskedText.css";
import bannervid from "../VideoMaskedText/banner-video.mp4";

const VideoMaskedText = () => {
  return (
    <div className=" text-left relative w-full md:h-44 h-72 ">
    <video className="absolute p-1 inset-0 w-full h-full  object-cover overflow-hidden" autoPlay loop muted>
      <source src={bannervid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black h-full w-full flex justify-start items-center text-white  font-semibold mix-blend-multiply">
      <div className="text-center">
        <div className="text-7xl md:text-8xl text-left  ">Full Stack Developer + <br />FreeLancer</div>
        
      </div> 
    </div>
  </div>
  

  );
};

export default VideoMaskedText;
