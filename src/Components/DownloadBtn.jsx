import { motion } from "framer-motion";
import React from "react";

git const DownloadBtn = () => {
  return (
    <div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
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
