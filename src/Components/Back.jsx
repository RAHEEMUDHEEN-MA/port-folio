import React from 'react'
import "../assets/Back.css"
import {motion, useTransform}from "framer-motion"

const Back = () => {
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]); // Map scroll position to opacity value
  const scale = useTransform(scrollYProgress, [0, 4], [1, 0]); // Map scroll position to opacity value
  const xPosition = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]); // Map scroll position to x-axis position

  return (
   <motion.div style={{opacity:opacity ,x:xPosition,scale:scale}} className='back-main'>
    <span className='left-block'></span>
    <span className='transperant-block'></span>
   </motion.div>  

  
  )
}

export default Back
