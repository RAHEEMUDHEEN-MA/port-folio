import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["0 5", "0 10"],
  });

  const scale = useTransform(scrollY, [0, 50], [1, 0.5]);
  const opacity = useTransform(scrollY, [0, 10], [10, 100]);

  return (
    <div className="p-4 md:px-24 py-10 h-96">
      <motion.span
        ref={ref}
        style={{
          scale: scale,
          opacity: opacity, 
        }}
        className="font-extrabold text-purple-400 text-2xl mt-52"
      >
      </motion.span>
    </div>
  );
};

export default About;
