import {motion, useScroll, useTransform}from "framer-motion"
import React from "react";



const DownloadBtn = () => {

  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]); // Map scroll position to opacity value
  // const scale = useTransform(scrollYProgress, [0, 4], [1, 0]); // Map scroll position to opacity value
  const xPosition = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]); // Map scroll position to x-axis position

  return (
    <div>
      <motion.button
            style={{ opacity,  x: xPosition }}

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.08 },
        }}
        whileTap={{ scale: 1,
          transition: { duration: 0.1 }
       }}
        className="border   rounded-md px-5 py-2 text-gray-400 hover:text-white md:mt-5 lg:mt-0  animate-none"
      >
        <a
          href="https://drive.google.com/file/d/1h_aCJ_JLGvAigLIe-ceNQPTufKFyutU_/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Resume
        </a>
      </motion.button>
    </div>
  );
};

export default DownloadBtn;
