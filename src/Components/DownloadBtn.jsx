import { motion } from 'framer-motion'
import React from 'react'

const DownloadBtn = () => {
  return (
    <div>
      <motion.button  
      initial={{opacity:0,}}
      animate={{opacity:1,}}
      transition={{ duration: 4, ease: "easeInOut" }}

      className="bg-gradient-to-br from-pink-900 to-purple-800 rounded-md px-5 py-2 text-gray-300 hover:text-white hover:bg-purple-700 animate-none">
            <a href="https://drive.google.com/file/d/1h_aCJ_JLGvAigLIe-ceNQPTufKFyutU_/view" target="_blank" rel="noopener noreferrer">Download CV</a>
          </motion.button>


    </div>

    
  )
}

export default DownloadBtn
