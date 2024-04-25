import React, { useEffect } from 'react'
import "../BubbleText/BubbleText.css"

const BubbleText = () => {
    function splitTextIntoSpans(target) {
    let elements = document.querySelectorAll(target)
    elements.forEach((element) => {
        element.classList.add('split-text')
        let text = element.innerText
        let splitText = text
            .split(" ")
            .map(function (word) {
                let char = word.split('').map(char => {
                    return `<span class="split-char">${char}</span>`
                }).join('')
                return `<div class="split-word">${char}&nbsp</div>`
            }).join('')      
         
        element.innerHTML = splitText
    }) 
}

useEffect(() => { 
    splitTextIntoSpans('.bubble-text')
}, [])

  return (
    <div className='bubble-container animate-pulse hover:animate-none   '>
      <div className="bubble-text text">I'M</div>
     <br className='md:hidden' />
      <div className="bubble-text text">RAHEEMUDHEEN </div>
    </div>
  )
}

export default BubbleText
