import React from 'react'
import "../assets/Back.css"
import {motion, useTransform}from "framer-motion"

const Back = () => {
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]); 
  const scale = useTransform(scrollYProgress, [0, 4], [1, 0]); 
  const xPosition = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]); 

  return (
   <motion.div style={{opacity:opacity ,x:xPosition,scale:scale}} className='back-main'>
    <span className='left-block'></span>
    <span className='transperant-block'></span>
   </motion.div>  

  
  )
}

export default Back
