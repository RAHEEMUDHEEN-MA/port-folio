import React, { useEffect } from "react";
import "../BubbleText/BubbleText.css";
import { useScroll, motion, useTransform } from "framer-motion";

const BubbleText = () => {
  function splitTextIntoSpans(target) {
    let elements = document.querySelectorAll(target);
    elements.forEach((element) => {
      element.classList.add("split-text");
      let text = element.innerText;
      let splitText = text
        .split(" ")
        .map(function (word) {
          let char = word
            .split("")
            .map((char) => {
              return `<span class="split-char">${char}</span>`;
            })
            .join("");
          return `<div class="split-word">${char}&nbsp</div>`;
        })
        .join("");

      element.innerHTML = splitText;
    });
  }

  useEffect(() => {
    splitTextIntoSpans(".bubble-text");
  }, []);
 
 
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]); // Map scroll position to opacity value
  const scale = useTransform(scrollYProgress, [0, 4], [1, 0]); // Map scroll position to opacity value
  const xPosition = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]); // Map scroll position to x-axis position

  return (
    <motion.div style={{  opacity ,scale,x:xPosition}} className=" bubble-container animate-pulse hover:animate-none    ">
      <div className="bubble-text text">I'M</div>
      <br className="md:hidden" />
      <div className="bubble-text text">RAHEEMUDHEEN </div>
    </motion.div>
  );
};

export default BubbleText;
