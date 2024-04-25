import { motion } from "framer-motion";
import React from "react";


const Intro = () => {
  return (
    <div className="h-20 md:w-1/2 text-gray-600 font-semibold text-lg md:pt-6">
      <motion.span 
       initial={{ opacity: 0,}}
       animate={{ opacity: 1,}}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      >Hi Folks! </motion.span>{" "}

      <motion.span 
       initial={{ opacity: 0,}}
       animate={{ opacity: 1,}}
      transition={{ duration: 2, ease: "easeInOut" }}
      >I'm a full-stack developer </motion.span>{" "}

      <motion.div 
       initial={{ opacity: 0, }}
       animate={{ opacity: 1,  }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      >dedicated to crafting seamless digital experiences.</motion.div>{" "}

      <motion.span 
       initial={{ opacity: 0, }}
       animate={{ opacity: 1, }}
      transition={{ duration: 2.6, ease: "easeIn" }}
      >Let's build something amazing together!</motion.span>{" "}

     
    </div>
  );
};

export default Intro;
