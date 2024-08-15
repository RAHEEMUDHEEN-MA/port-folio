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

    const splitChars = document.querySelectorAll(".split-char");
    const initialDelay = 1000;
    const hoverDuration = 2000;

    setTimeout(() => {
      splitChars.forEach((char, index) => {
        if (index < 6 && index > 3) {
          char.classList.add("simulate-hover");
        }
      });

      setTimeout(() => {
        splitChars.forEach((char) => {
          char.classList.remove("simulate-hover");
        });
      }, hoverDuration);
    }, initialDelay);
  }, []);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 4], [1, 0]);
  const xPosition = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  return (
    <motion.div
      style={{ opacity, scale, x: xPosition }}
      className="bubble-container animate-pulse hover:animate-none"
    >
      <div className="bubble-text text">I'M</div>
      <br className="md:hidden" />
      <div className="bubble-text text">RAHEEMUDHEEN</div>
    </motion.div>
  );
};

export default BubbleText;
