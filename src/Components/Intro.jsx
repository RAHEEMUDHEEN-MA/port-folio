import { useScroll, motion, useTransform } from "framer-motion";
import React from "react";

const Intro = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]); 
  const scale = useTransform(scrollYProgress, [0, 4], [1, 0]); 
  const xPosition = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]); 

  return (
    <motion.div
      style={{ opacity, scale, x: xPosition }}
      className="h-20 md:w-1/2 text-neutral-600  text-lg md:pt-6"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        Hi Folks!{" "}
      </motion.span>{" "}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        I'm a full-stack developer{" "}
      </motion.span>{" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      >
        dedicated to crafting seamless digital experiences.
      </motion.div>{" "}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.6, ease: "easeIn" }}
      >
        Let's build something amazing together! 
      </motion.span>{" "}
    </motion.div>
  );
};

export default Intro;
