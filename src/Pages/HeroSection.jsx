import React from 'react'
import BubbleText from '../Components/BubbleText/BubbleText'
import VideoMaskedText from '../Components/VideoMaskedText/VideoMaskedText'
import Intro from '../Components/Intro'
import DownloadBtn from '../Components/DownloadBtn'

const HeroSection = () => {
  return (
    <div className= 'p-4 md:px-24 py-10'>
      <BubbleText/>
      <VideoMaskedText/>
      <Intro/>
      <br />
      <br />
      <DownloadBtn/>
    </div>
  )
}

export default HeroSection
