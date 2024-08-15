import React, {  useState } from "react";
import "../VideoMaskedText/VideoMaskedText.css";
import bannervid from "../VideoMaskedText/banner-video.mp4";
import { motion, useScroll, useTransform } from "framer-motion";

const VideoMaskedText = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Map scroll position to opacity value
  const scale = useTransform(scrollYProgress, [0, 8], [1, 0]); // Map scroll position to opacity value
  const xPosition = useTransform(scrollYProgress, [0, 0.5], ["0%", "20%"]); // Map scroll position to x-axis position

  return (
    <motion.div
      className={`text-left relative w-full lg:h-44 h-72 ${videoLoaded ? "" : "hidden"}`}
    >
      <video
        className="absolute p-1 inset-0 w-full h-full object-cover overflow-hidden"
        autoPlay
        loop
        muted 
        onLoadedData={handleVideoLoad} 
      >
        <source src={bannervid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {videoLoaded && (
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black h-full w-full flex justify-start items-center text-white font-semibold mix-blend-multiply"
        >
          <div className="text-center">
                      {/* style={{ opacity }} // Apply opacity style based on scroll position */}

            <motion.div 
                      style={{ opacity,scale ,x:xPosition}} // Apply opacity style based on scroll position

              initial={{ opacity: 0, y: "-100%" }} 
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="text-7xl md:text-8xl text-left"
            >
              Full Stack Developer + <br />
              FreeLancer
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default VideoMaskedText;
