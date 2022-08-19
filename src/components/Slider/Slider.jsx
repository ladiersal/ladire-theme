import React, { useState } from 'react'
import Arrow from './Arrow';
import Dots from './Dots';
import imageSlider from './imageSlider'
import SliderContext from './SliderContext'
import '../../styles/slider.css'

const Slide = () => {
    const len = imageSlider.length - 1;
    const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className='container-ld'>
    <div className="slider-container">
        <SliderContext activeIndex={activeIndex} imageSlider={imageSlider} />
        <Arrow 
            prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
            nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}    
        />
        <Dots 
            activeIndex={activeIndex}
            imageSlider={imageSlider}
            onclick={activeIndex => setActiveIndex(activeIndex)}
        />
    </div>
    </div>
  )
}

export default Slide